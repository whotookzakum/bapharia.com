import { json } from '@sveltejs/kit'
import { dev } from '$app/environment'
import { redirect } from '@sveltejs/kit';
import ja_JP from "$bp_api/bno/texts/ja_JP.json"
import fs from "fs";
import uniq from "lodash/uniq";

export const GET = async ({ params, url }) => {

    // 1. Create a .txt file with every unique Japanese string
    const ja_unique_strings = uniq(
        ja_JP.flatMap(ns =>
            // Split by "\n" to further reduce duplicates. \"enemy name"\ not handled.
            ns.texts.flatMap(obj => obj.text.split("\n"))
        )
    )
    // fs.writeFileSync('ja_unique_strings.txt', ja_unique_strings.join("\n"), 'utf8')

    // 2. Translate the .txt file via DeepL API


    // 3. Read the machine translated .txt file and reconcile into a single object. The key is the original Japanese string and the value is the translated string, i.e. { "こんにちは": "Hello" }
    const translated_unique_strings = fs.readFileSync("./ja_unique_strings.txt", 'utf8').split("\n")
    const machine_translation_bank =
        ja_unique_strings.reduce((acc, ja_string, index) => {
            acc[ja_string] = translated_unique_strings[index]
            return acc
        }, {})

    // 4. Construct a new localization file based on translation priority: manual, machine, no translation (fallback).
    const translated_file = ja_JP.map(ns => {
        const texts = ns.texts.map(obj => {
            const text = obj.text.split("\n").map(line => machine_translation_bank[line] || line).join("\n")
            return { ...obj, text }
        })
        return { ...ns, texts }
    })

    return json(translated_file)
}