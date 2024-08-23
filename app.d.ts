declare global {
	namespace App {
		interface Platform {
			env: {
				bno_ja: KVNamespace;
				bno_en: KVNamespace;
			}
		}
	}
}