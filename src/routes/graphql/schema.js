import { createSchema } from 'graphql-yoga'
import resolvers from './resolvers.js';
// import * as fs from 'fs';
// import * as path from 'path';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

export const typeDefs = `type Ability {
	big_success_max_value: Int
	big_success_min_value: Int
	desc: Text
	name: Text
	probability: Int
	skill_id: Int
	skill_mastery_param: [SkillMasteryParam]
	stats: [Stat]!
	success_max_value: Int
	success_min_value: Int
  }
  
  type AvatarPart implements DBEntry {
	subcategoryName: Text
	desc: Text
	id: String!
	name: Text
	thumb: String
  }
  
  type Costume implements DBEntry {
	subcategoryName: Text
	desc: Text
	id: String!
	name: Text
	thumb: String
  }
  
  type DBResults {
	results: [DBEntry]!
	totalResults: Int!
	hasNextPage: Boolean
	hasPreviousPage: Boolean
  }
  
  interface DBEntry {
	subcategoryName: Text
	desc: Text
	id: String!
	name: Text
	thumb: String
  }
  
  type Enemy implements DBEntry {
	subcategoryName: Text
	desc: Text
	found_in: [EnemyLocation]!
	id: String!
	level_params: [LevelParams]!
	name: Text
	thumb: String
  }
  
  type EnemyDrop {
	content_id: String
	drop_num_crv: Int
	drop_num_lv1: Int
	drop_num_lv100: Int
	drop_num_rnd: Int
	drop_rate: Int
	friday: Int
	is_treasure_chest: Boolean
	item_index: Int
	level_max: Int
	level_min: Int
	monday: Int
	name: Text
	rarity_1_rate: Int
	rarity_1_rewards: [TreasureReward]
	rarity_3_rate: Int
	rarity_3_rewards: [TreasureReward]
	respawn_interval: Int
	respawn_rate: Int
	respawn_time: Int
	respawn_warranty: Int
	saturday: Int
	sunday: Int
	thursday: Int
	tuesday: Int
	type: Int
	wednesday: Int
  }
  
  type EnemyLocation {
	drops: [EnemyDrop]!
	id: String
	name: Text
  }
  
  type GameMap implements DBEntry {
	subcategoryName: Text
	desc: Text
	id: String!
	mapImages: [String]!
	name: Text
	thumb: String
  }
  
  type Gesture implements DBEntry {
	subcategoryName: Text
	desc: Text
	id: String!
	name: Text
	thumb: String
  }
  
  type Imagine implements DBEntry {
	abilities: [Ability]!
	subcategoryName: Text
	desc: Text
	elementImg: String
	id: String!
	imagine_max_level: Int
	imagine_type: Int
	name: Text
	params: [LevelParams]!
	price_player_sells: Int
	recipe: Recipe
	slotImg: String
	thumb: String
  }
  
  type Item implements DBEntry {
	adventurer_rank: Int
	subcategoryName: Text
	desc: Text
	dungeon_only: Boolean
	effectDesc: Text
	id: String!
	item_exp: Int
	item_level: Int
	name: Text
	no_sale_flag: Boolean
	price_player_buys: Int
	price_player_sells: Int
	sourceDesc: Text
	thumb: String
  }
  
  type LMChargeCondition {
	desc: Text
	rates: [LMChargeRate]!
  }
  
  type LMChargeRate {
	accumulate_value: Int
	lottery_rate: Int
  }
  
  type LMEffect {
	cost: Int
	desc: Text
	occurancy_rate: Int
  }
  
  type LevelParams {
	attack_power: Int
	attack_power_factor: Int
	attribute_value: Int
	critical_power: Int
	defence_power: Int
	defence_power_factor: Int
	defensive_power: Int
	dex: Int
	exp_crv: Int
	exp_lv1: Int
	exp_lv100: Int
	hit_point: Int
	hit_point_factor: Int
	int: Int
	level: Int
	mnd: Int
	offensive_power: Int
	skill: Int
	str: Int
	vit: Int
  }
  
  type LiquidMemory implements DBEntry {
	accumulate_condition_parameters: [LMChargeCondition]!
	bottle_accumulate_limit: Int
	subcategoryName: Text
	desc: Text
	efficacy_parameters: [LMEffect]!
	id: String!
	name: Text
	thumb: String
  }
  
  scalar Map
  
  type Material {
	amount: Int
	id: String!
	name: Text
	need_num: Int
	sourceDesc: Text
  }
  
  type Query {
	entries(limit: Int, offset: Int, searchTerm: String, categories: String, classes: String, elements: String, level: String, ar: String, items: String, weapons: String, imagine: String, enemies: String, skills: String, maps: String, costumes: String, avatarparts: String, quests: String): DBResults!
  }
  
  type Recipe {
	adventurer_rank: Int
	base_ability_rate1: Int
	base_ability_rate2: Int
	base_ability_rate3: Int
	base_ability_rate4: Int
	bonus_ability_rate1: Int
	bonus_ability_rate2: Int
	bonus_ability_rate3: Int
	bonus_ability_rate4: Int
	bonus_rate: Int
	difficulty: Int
	great_success_tokens: Int
	materials: [Material]!
	price: Int
	use_money: Int
  }
  
  type Skill implements DBEntry {
	abilities: [Ability]!
	subcategoryName: Text
	classImg: String
	class_type: Int
	desc: Text
	elementImg: String
	id: String!
	name: Text
	skillBackgroundImg: String
	skill_mastery_param: [SkillMasteryParam]
	skill_type: Int
	thumb: String
  }
  
  type SkillMasteryParam {
	condition_class_level: Int
	level: Int
  }
  
  type Stamp {
	stamp_id: Int
  }
  
  type StampSet implements DBEntry {
	subcategoryName: Text
	desc: Text
	id: String!
	name: Text
	stamp_data: [Stamp]!
	thumb: String
  }
  
  type Stat {
	name: Text
	value: Int
  }
  
  type Text {
	en_US: String!
	ja_JP: String!
  }
  
  type Token implements DBEntry {
	subcategoryName: Text
	desc: Text
	effect_value: Int
	id: String!
	max_amount: Int
	name: Text
	possession_type: Int
	purchase_type: Int
	recovery_amount: Int
	recovery_type: Int
	thumb: String
  }
  
  type TreasureReward {
	condition_times: Int
	lot_flat: Int
	name: Text
	rarity_max: Int
	rarity_min: Int
	rate: Int
	reward_amount_max: Int
	reward_amount_min: Int
	reward_master_id: String
	reward_type: Int
  }
  
  type TreasureSource {
	location: GameMap
	name: Text
	probability: Int
  }
  
  type Weapon implements DBEntry {
	abilities: [Ability]!
	attribute: Int
	subcategoryName: Text
	classImg: String
	desc: Text
	elementImg: String
	id: String!
	name: Text
	price_player_buys: Int
	price_player_sells: Int
	recipe: Recipe
	stats: [LevelParams]!
	thumb: String
	treasureSources: [TreasureSource]
	weapon_max_level: Int
  }
  
  type Quest implements DBEntry {
	subcategoryName: Text
	desc: Text
	id: String!
	name: Text
	thumb: String
  }`

export const schema = createSchema({
	// typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf-8'),
	typeDefs,
	resolvers
})
