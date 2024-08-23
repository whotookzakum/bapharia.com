1. `npm run upd` updates `bp_api`, ``bp_client`, `bpassets`. Add support for auto-updating `bptranslatefiles`, for now simply pull the submodule.
2. Visit `/api/create` to update KV.
3. Replace the dev code with the prod code in `/api/[...path]/+server.js`

In the `/api/create`, I delete SkillInfo from skills, as it's not needed in the final .json and takes a lot of data. This fixed running out of memory when building. May be needed for other jsons as well.

If SSR and caching don't work, prerender each page locally and deploy via wrangler CLI.

## Architecture
1. Detect user location & redirect to BNO or AGS version
2. Detect user locale & redirect to EN/JA/FR etc.
3. Load content and listen to changes in publisher or locale. Store as cookie.