import { json } from '@sveltejs/kit'
import imagineData from '$lib/apiext/imagine.json';

export const GET = async ({ params, fetch }) => {
    const texts_ja_JP = await fetch("/api/locale/ja_JP")
    const ja = await texts_ja_JP.json()

    const texts_en_US = await fetch("/api/locale/en_US")
    const en = await texts_en_US.json()

    const imagines = imagineData.map(item => {
        return {
            ...item,
            locale: {
                ja_JP: {
                    name: ja.master_imagine_text[item.imagine_name],
                    desc: ja.master_imagine_text[item.imagine_desc]
                },
                en_US: {
                    name: en.master_imagine_text[item.imagine_name],
                    desc: en.master_imagine_text[item.imagine_desc]
                }
            }
        }
    })

    return json(imagines)
}