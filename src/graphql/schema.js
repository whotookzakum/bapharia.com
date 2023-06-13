import { createSchema } from 'graphql-yoga'
import resolvers from './resolvers.js';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const typeDefs = `scalar Map

type Query {
	entries(searchTerm: String, categories: String, first: Int, after: String): DBConnection!
	entry(id: String!): DBEntry
}

type DBConnection {
	edges: [EntryEdge!]!
	pageInfo: PageInfo!
	totalResults: Int!
}

type EntryEdge {
	cursor: String
	node: DBEntry
}

type PageInfo {
	endCursor: String
	hasNextPage: Boolean!
	hasPreviousPage: Boolean!
	startCursor: String
}

interface DBEntry {
	id: String!
	name: Text
	desc: Text
	thumb: String
	category: Text
}

type Text {
	ja_JP: String!
	en_US: String!
}

type Item implements DBEntry {
	id: String!
	name: Text
	desc: Text
	thumb: String
	category: Text

	sourceDesc: Text
	effectDesc: Text
	item_level: Int
	item_exp: Int
	adventurer_rank: Int
	dungeon_only: Boolean
	no_sale_flag: Boolean
	price_player_sells: Int
	price_player_buys: Int
}

type Enemy implements DBEntry {
	id: String!
	name: Text
	desc: Text
	thumb: String
	category: Text

	level_params: [LevelParams]!
	found_in: [EnemyLocation]!
}

type EnemyLocation {
	id: String
	name: Text
	drops: [EnemyDrop]!
}

type EnemyDrop {
	content_id: String
	drop_num_crv: Int
	drop_num_lv1: Int
	drop_num_lv100: Int
	drop_num_rnd: Int
	drop_rate: Int
	item_index: Int
	level_max: Int
	level_min: Int
	type: Int
	name: Text

	# Treasures
	is_treasure_chest: Boolean
	respawn_interval: Int
	respawn_rate: Int
	respawn_warranty: Int
	respawn_time: Int
	sunday: Int
	monday: Int
	tuesday: Int
	wednesday: Int
	thursday: Int
	friday: Int
	saturday: Int
	rarity_1_rate: Int
	rarity_1_rewards: [TreasureReward]
	rarity_3_rate: Int
	rarity_3_rewards: [TreasureReward]
}

type TreasureReward {
	lot_flat: Int
	reward_master_id: String
	reward_amount_min: Int
	reward_amount_max: Int
	reward_type: Int
	rarity_min: Int
	rarity_max: Int
	rate: Int
	condition_times: Int
	name: Text
}

type Costume implements DBEntry {
	id: String!
	name: Text
	desc: Text
	thumb: String
	category: Text
}

type Gesture implements DBEntry {
	id: String!
	name: Text
	desc: Text
	thumb: String
	category: Text
}

type Imagine implements DBEntry {
	id: String!
	name: Text
	desc: Text
	thumb: String
	category: Text

	price_player_sells: Int
	imagine_type: Int
	imagine_max_level: Int
	slotImg: String
	elementImg: String
	params: [LevelParams]!
	abilities: [Ability]!
	recipe: Recipe
}

type Recipe {
	adventurer_rank: Int
	price: Int
	materials: [Material]!
	# Weapon
	use_money: Int
	difficulty: Int
	bonus_rate: Int
	base_ability_rate1: Int
	base_ability_rate2: Int
	base_ability_rate3: Int
	base_ability_rate4: Int
	bonus_ability_rate1: Int
	bonus_ability_rate2: Int
	bonus_ability_rate3: Int
	bonus_ability_rate4: Int
	great_success_tokens: Int
}

# Similar to Item
type Material {
	id: String!
	amount: Int
	name: Text
	sourceDesc: Text
	# Weapon
	need_num: Int
}

type LevelParams {
	level: Int
	skill: Int
	attribute_value: Int
	offensive_power: Int
	str: Int
	vit: Int
	dex: Int
	mnd: Int
	int: Int
	defensive_power: Int
	# Weapon
	critical_power: Int
	# Enemy
	attack_power: Int
	attack_power_factor: Int
	defence_power: Int
	defence_power_factor: Int
	exp_crv: Int
	exp_lv1: Int
	exp_lv100: Int
	hit_point: Int
	hit_point_factor: Int
}

type Ability {
	probability: Int
	name: Text
	# Imagine
	stats: [Stat]!
	# Weapon
	big_success_max_value: Int
	big_success_min_value: Int
	success_max_value: Int
	success_min_value: Int
	# Skill
	skill_id: Int
	desc: Text
	skill_mastery_param: [SkillMasteryParam]
}

type SkillMasteryParam {
	level: Int
	condition_class_level: Int
}

type Stat {
	name: Text
	value: Int
}

type LiquidMemory implements DBEntry {
	id: String!
	name: Text
	desc: Text
	thumb: String
	category: Text

	efficacy_parameters: [LMEffect]!
	accumulate_condition_parameters: [LMChargeCondition]!
	bottle_accumulate_limit: Int
}

type LMEffect {
	desc: Text
	occurancy_rate: Int
	cost: Int
}

type LMChargeCondition {
	desc: Text
	rates: [LMChargeRate]!
}

type LMChargeRate {
	accumulate_value: Int
	lottery_rate: Int
}

type StampSet implements DBEntry {
	id: String!
	name: Text
	desc: Text
	thumb: String
	category: Text

	stamp_data: [Stamp]!
}

type Stamp {
	stamp_id: Int
}

type Token implements DBEntry {
	id: String!
	name: Text
	desc: Text
	thumb: String
	category: Text

	max_amount: Int
	effect_value: Int
	possession_type: Int
	purchase_type: Int
	recovery_type: Int
	recovery_amount: Int
}

type Weapon implements DBEntry {
	id: String!
	name: Text
	desc: Text
	thumb: String
	category: Text

	attribute: Int
	weapon_max_level: Int
	classImg: String
	price_player_sells: Int
	price_player_buys: Int
	elementImg: String
	stats: [LevelParams]!
	abilities: [Ability]!
	recipe: Recipe
	treasureSources: [TreasureSource]
}

type TreasureSource {
	location: GameMap
	name: Text
	probability: Int
}

type Skill implements DBEntry {
	id: String!
	name: Text
	desc: Text
	thumb: String
	category: Text

	class_type: Int
	skillBackgroundImg: String
	skill_type: Int
	skill_mastery_param: [SkillMasteryParam]
	elementImg: String
	classImg: String
	abilities: [Ability]!
}

type GameMap implements DBEntry {
	id: String!
	name: Text
	desc: Text
	thumb: String
	category: Text
	mapImages: [String]!
}
`

export const schema = createSchema({
	typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf-8'),
	// typeDefs,
	resolvers
})
