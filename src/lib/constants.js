export const SUPPORTED_VERSIONS = [
    {
        publisher: "bno",
        locales: ["en", "ja"]
    },
    // {
    //     publisher: "ags",
    //     locales: ["en", "fr", "de", "es", "pt"]
    // },
    // {
    //     publisher: "sg",
    //     locales: []
    // },
    // {
    //     publisher: "ct",
    //     locales: []
    // },
]

export const SUPPORTED_LANGS = SUPPORTED_VERSIONS.flatMap(ver => ver.locales)
export const SUPPORTED_PUBLISHERS = SUPPORTED_VERSIONS.map(ver => ver.publisher)

export const LANG_CODES = {
    en: "en_US",
    ja: "ja_JP",
}