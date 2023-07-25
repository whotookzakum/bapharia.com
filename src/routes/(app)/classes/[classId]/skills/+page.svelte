<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    import Skill from "./Skill.svelte";
    export let data;

    const skills = [
        {
    "skill_id": 602,
    "created_at": "2023-07-12 01:14:14",
    "updated_at": "2023-07-12 01:14:14",
    "skill_name": 5,
    "skill_desc_array": [
      {
        "desc": 558
      },
      {
        "desc": 559
      },
      {
        "desc": 560
      }
    ],
    "class_type": 6,
    "class_level": 0,
    "skill_type": 3,
    "ability_type": 0,
    "skill_mastery_param": [
      {
        "level": 1,
        "condition_class_level": 2
      },
      {
        "level": 2,
        "condition_class_level": 21
      },
      {
        "level": 3,
        "condition_class_level": 40
      }
    ],
    "condition_skill_id_1": 0,
    "condition_skill_level_1": 0,
    "condition_skill_id_2": 0,
    "condition_skill_level_2": 0,
    "cannot_learn_skill_id": 0,
    "switch_skill_id": 0,
    "is_default_skill": true,
    "is_sub_skill": false,
    "id": "602",
    "name": {
      "ja_JP": "スタンピードアロー",
      "en_US": "Toxic Barrage"
    },
    "desc": {
      "ja_JP": "G1：エネミーを追尾する矢を4本同時に放ち、ヒットしたエネミーに毒を付与する。矢はロックオンしたターゲットに優先して飛ぶ\nG2：インターバル短縮\nG3：放つ矢が6本に増加",
      "en_US": "G1: Fires four homing arrows at once. Inflicts poison on foes.\r\nG2: Shortens cooldown.\r\nG3: Increases to six arrows."
    },
    "thumb": "/UI/Icon/PlayerSkill/Class6/UI_PlayerSkill_602.png",
    "classImg": "/UI/Icon/Class/UI_IconClass_06.png",
    "abilities": [
      {
        "skill_id": 106024,
        "created_at": "2023-07-12 01:14:14",
        "updated_at": "2023-07-12 01:14:14",
        "skill_name": 56,
        "skill_desc_array": [
          {
            "desc": 645
          }
        ],
        "class_type": 6,
        "class_level": 50,
        "skill_type": 11,
        "ability_type": 1,
        "skill_mastery_param": [
          {
            "level": 1,
            "condition_class_level": 35
          }
        ],
        "condition_skill_id_1": 602,
        "condition_skill_level_1": 3,
        "condition_skill_id_2": 0,
        "condition_skill_level_2": 0,
        "cannot_learn_skill_id": 0,
        "switch_skill_id": 106023,
        "is_default_skill": false,
        "is_sub_skill": false,
        "desc": {
          "ja_JP": "α：毒の持続時間を延長し、毒の与ダメージも増加",
          "en_US": "α: Extends the duration of poison and increases poison damage.\r"
        }
      },
      {
        "skill_id": 106023,
        "created_at": "2023-07-12 01:14:14",
        "updated_at": "2023-07-12 01:14:14",
        "skill_name": 55,
        "skill_desc_array": [
          {
            "desc": 644
          }
        ],
        "class_type": 6,
        "class_level": 50,
        "skill_type": 11,
        "ability_type": 2,
        "skill_mastery_param": [
          {
            "level": 1,
            "condition_class_level": 35
          }
        ],
        "condition_skill_id_1": 602,
        "condition_skill_level_1": 3,
        "condition_skill_id_2": 0,
        "condition_skill_level_2": 0,
        "cannot_learn_skill_id": 0,
        "switch_skill_id": 106024,
        "is_default_skill": false,
        "is_sub_skill": false,
        "desc": {
          "ja_JP": "β：毒の与ダメージが減少するが、矢がヒットした時に爆発する様になる。爆発にヒットしたエネミーにも毒を付与する",
          "en_US": "β: Decreases poison damage, but the arrow will explode on impact. Enemies hit by the explosion will also be inflicted with poison.\r"
        }
      }
    ],
    "skillBackgroundImg": "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_A_D.png",
    "elementImg": "/UI/Icon/Attribute/UI_IconAttribute_Empty.png",
    "subcategoryName": {
      "ja_JP": "タクティカルスキル",
      "en_US": "Tactical Skill"
    },
    "entryTypes": [
      "Skill"
    ]
  },
  {
    "skill_id": 603,
    "created_at": "2023-07-12 01:14:14",
    "updated_at": "2023-07-12 01:14:14",
    "skill_name": 6,
    "skill_desc_array": [
      {
        "desc": 1819
      }
    ],
    "class_type": 6,
    "class_level": 0,
    "skill_type": 7,
    "ability_type": 0,
    "skill_mastery_param": [],
    "condition_skill_id_1": 0,
    "condition_skill_level_1": 0,
    "condition_skill_id_2": 0,
    "condition_skill_level_2": 0,
    "cannot_learn_skill_id": 0,
    "switch_skill_id": 0,
    "is_default_skill": true,
    "is_sub_skill": false,
    "id": "603",
    "name": {
      "ja_JP": "BLS回避",
      "en_US": "BLS Dodge"
    },
    "desc": {
      "ja_JP": "Dummy",
      "en_US": "Dummy"
    },
    "thumb": "/UI/Icon/Class/UI_IconClass_Nodata.png",
    "classImg": "/UI/Icon/Class/UI_IconClass_06.png",
    "abilities": [],
    "skillBackgroundImg": "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_Empty.png",
    "elementImg": "/UI/Icon/Attribute/UI_IconAttribute_Empty.png",
    "subcategoryName": {
      "ja_JP": "回避",
      "en_US": "Dodge"
    },
    "entryTypes": [
      "Skill"
    ]
  },
  {
    "skill_id": 624,
    "created_at": "2023-07-12 01:14:14",
    "updated_at": "2023-07-12 01:14:14",
    "skill_name": 1663,
    "skill_desc_array": [
      {
        "desc": 1674
      },
      {
        "desc": 1675
      },
      {
        "desc": 1676
      }
    ],
    "class_type": 6,
    "class_level": 0,
    "skill_type": 1,
    "ability_type": 0,
    "skill_mastery_param": [
      {
        "level": 1,
        "condition_class_level": 1
      },
      {
        "level": 2,
        "condition_class_level": 19
      },
      {
        "level": 3,
        "condition_class_level": 38
      }
    ],
    "condition_skill_id_1": 0,
    "condition_skill_level_1": 0,
    "condition_skill_id_2": 0,
    "condition_skill_level_2": 0,
    "cannot_learn_skill_id": 0,
    "switch_skill_id": 0,
    "is_default_skill": true,
    "is_sub_skill": false,
    "id": "624",
    "name": {
      "ja_JP": "キュアアロー",
      "en_US": "Curative Field"
    },
    "desc": {
      "ja_JP": "G1：味方のHPを小回復するエリアを生成。ダメージを与えるとBCゲージが増加。一定値を超えるとレベルが上昇し、回復量が増加。発射するとゲージはリセットされる\nG2：ダメージを与えた時のBCゲージ上昇量増加\nG3：HP回復量増加",
      "en_US": "G1: Creates an AOE field that provides a small amount of HP recovery to allies. Doing damage will raise the BC gauge. Once the gauge has reached certain points, it will raise the level of the skill, increasing the amount healed and widening the AOE field. Using this skill will reset the gauge.\r\nG2: Increases how much the BC Gauge raises when dealing damage.\r\nG3: Increases amount of HP recovered."
    },
    "thumb": "/UI/Icon/PlayerSkill/Common/UI_PlayerSkill_Sub.png",
    "classImg": "/UI/Icon/Class/UI_IconClass_06.png",
    "abilities": [],
    "skillBackgroundImg": "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_Empty.png",
    "elementImg": "/UI/Icon/Attribute/UI_IconAttribute_Empty.png",
    "subcategoryName": {
      "ja_JP": "ベースアクション",
      "en_US": "Basic Attack"
    },
    "entryTypes": [
      "Skill"
    ]
  },
  {
    "skill_id": 605,
    "created_at": "2023-07-12 01:14:14",
    "updated_at": "2023-07-12 01:14:14",
    "skill_name": 8,
    "skill_desc_array": [
      {
        "desc": 564
      }
    ],
    "class_type": 6,
    "class_level": 0,
    "skill_type": 6,
    "ability_type": 0,
    "skill_mastery_param": [
      {
        "level": 1,
        "condition_class_level": 10
      }
    ],
    "condition_skill_id_1": 0,
    "condition_skill_level_1": 0,
    "condition_skill_id_2": 0,
    "condition_skill_level_2": 0,
    "cannot_learn_skill_id": 0,
    "switch_skill_id": 0,
    "is_default_skill": true,
    "is_sub_skill": false,
    "id": "605",
    "name": {
      "ja_JP": "モータルグラビティ",
      "en_US": "Gravity Well"
    },
    "desc": {
      "ja_JP": "大きく構え、特殊な矢を発射する。矢がヒットした箇所を中心に広範囲の重力エリアを発生させ、ヒットしたエネミーを中心に引き寄せながら継続ダメージを与える",
      "en_US": "Stands strong to fire a special type of arrow that creates a large AOE field with a gravity effect around the targeted enemy. It pulls enemies toward it and deals continuous damage to all within the field."
    },
    "thumb": "/UI/Icon/PlayerSkill/Common/UI_PlayerSkill_Special.png",
    "classImg": "/UI/Icon/Class/UI_IconClass_06.png",
    "abilities": [],
    "skillBackgroundImg": "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_Empty.png",
    "elementImg": "/UI/Icon/Attribute/UI_IconAttribute_Empty.png",
    "subcategoryName": {
      "ja_JP": "ULTスキル",
      "en_US": "Ultimate Attack"
    },
    "entryTypes": [
      "Skill"
    ]
  },
  {
    "skill_id": 608,
    "created_at": "2023-07-12 01:14:14",
    "updated_at": "2023-07-12 01:14:14",
    "skill_name": 9,
    "skill_desc_array": [
      {
        "desc": 565
      },
      {
        "desc": 566
      },
      {
        "desc": 567
      }
    ],
    "class_type": 6,
    "class_level": 0,
    "skill_type": 4,
    "ability_type": 0,
    "skill_mastery_param": [
      {
        "level": 1,
        "condition_class_level": 3
      },
      {
        "level": 2,
        "condition_class_level": 22
      },
      {
        "level": 3,
        "condition_class_level": 41
      }
    ],
    "condition_skill_id_1": 0,
    "condition_skill_level_1": 0,
    "condition_skill_id_2": 0,
    "condition_skill_level_2": 0,
    "cannot_learn_skill_id": 0,
    "switch_skill_id": 0,
    "is_default_skill": true,
    "is_sub_skill": false,
    "id": "608",
    "name": {
      "ja_JP": "リーサルシャワー",
      "en_US": "Lethal Shower"
    },
    "desc": {
      "ja_JP": "G1：上空に矢を放ち、狙った地点に継続的にダメージを与えるエリアを生成する\nG2：チャージ可能となり、チャージレベルが上昇すると与ダメージ増加\nG3：さらにチャージが可能となり、チャージレベル上昇に応じて与ダメージ増加",
      "en_US": "G1: Fires an arrow into the air to create an AOE field on the targeted area that deals continuous damage.\r\nG2: Can be charged. The higher the charge level, the greater the damage.\r\nG3: Can be charged even further. The higher the charge level, the greater the damage."
    },
    "thumb": "/UI/Icon/PlayerSkill/Class6/UI_PlayerSkill_608.png",
    "classImg": "/UI/Icon/Class/UI_IconClass_06.png",
    "abilities": [
      {
        "skill_id": 106016,
        "created_at": "2023-07-12 01:14:14",
        "updated_at": "2023-07-12 01:14:14",
        "skill_name": 48,
        "skill_desc_array": [
          {
            "desc": 636
          }
        ],
        "class_type": 6,
        "class_level": 50,
        "skill_type": 11,
        "ability_type": 1,
        "skill_mastery_param": [
          {
            "level": 1,
            "condition_class_level": 35
          }
        ],
        "condition_skill_id_1": 608,
        "condition_skill_level_1": 3,
        "condition_skill_id_2": 0,
        "condition_skill_level_2": 0,
        "cannot_learn_skill_id": 0,
        "switch_skill_id": 106015,
        "is_default_skill": false,
        "is_sub_skill": false,
        "desc": {
          "ja_JP": "α：チャージ時間短縮",
          "en_US": "α: Shortens charge time.\r"
        }
      },
      {
        "skill_id": 106015,
        "created_at": "2023-07-12 01:14:14",
        "updated_at": "2023-07-12 01:14:14",
        "skill_name": 47,
        "skill_desc_array": [
          {
            "desc": 635
          }
        ],
        "class_type": 6,
        "class_level": 50,
        "skill_type": 11,
        "ability_type": 2,
        "skill_mastery_param": [
          {
            "level": 1,
            "condition_class_level": 35
          }
        ],
        "condition_skill_id_1": 608,
        "condition_skill_level_1": 3,
        "condition_skill_id_2": 0,
        "condition_skill_level_2": 0,
        "cannot_learn_skill_id": 0,
        "switch_skill_id": 106016,
        "is_default_skill": false,
        "is_sub_skill": false,
        "desc": {
          "ja_JP": "β：攻撃範囲が縮小するが、与ダメージが増加する",
          "en_US": "β: Increases damage output, but decreases AOE field size.\r"
        }
      }
    ],
    "skillBackgroundImg": "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_A.png",
    "elementImg": "/UI/Icon/Attribute/UI_IconAttribute_Empty.png",
    "subcategoryName": {
      "ja_JP": "タクティカルスキル",
      "en_US": "Tactical Skill"
    },
    "entryTypes": [
      "Skill"
    ]
  },
  {
    "skill_id": 609,
    "created_at": "2023-07-12 01:14:14",
    "updated_at": "2023-07-12 01:14:14",
    "skill_name": 10,
    "skill_desc_array": [
      {
        "desc": 568
      },
      {
        "desc": 569
      },
      {
        "desc": 570
      }
    ],
    "class_type": 6,
    "class_level": 0,
    "skill_type": 5,
    "ability_type": 0,
    "skill_mastery_param": [
      {
        "level": 1,
        "condition_class_level": 4
      },
      {
        "level": 2,
        "condition_class_level": 23
      },
      {
        "level": 3,
        "condition_class_level": 42
      }
    ],
    "condition_skill_id_1": 0,
    "condition_skill_level_1": 0,
    "condition_skill_id_2": 0,
    "condition_skill_level_2": 0,
    "cannot_learn_skill_id": 0,
    "switch_skill_id": 0,
    "is_default_skill": true,
    "is_sub_skill": false,
    "id": "609",
    "name": {
      "ja_JP": "ハンタースピリット",
      "en_US": "Hunter's Spirit"
    },
    "desc": {
      "ja_JP": "G1：発動中、BCゲージの増加量が上昇する\nG2：効果時間延長\nG3：増加量上昇",
      "en_US": "G1: Increases how much the BC gauge fills while active.\r\nG2: Shortens cooldown time.\r\nG3: Increases BC gauge fill amount further."
    },
    "thumb": "/UI/Icon/PlayerSkill/Class6/UI_PlayerSkill_609.png",
    "classImg": "/UI/Icon/Class/UI_IconClass_06.png",
    "abilities": [
      {
        "skill_id": 106091,
        "created_at": "2023-07-12 01:14:14",
        "updated_at": "2023-07-12 01:14:14",
        "skill_name": 57,
        "skill_desc_array": [
          {
            "desc": 646
          }
        ],
        "class_type": 6,
        "class_level": 50,
        "skill_type": 11,
        "ability_type": 1,
        "skill_mastery_param": [
          {
            "level": 1,
            "condition_class_level": 35
          }
        ],
        "condition_skill_id_1": 609,
        "condition_skill_level_1": 3,
        "condition_skill_id_2": 0,
        "condition_skill_level_2": 0,
        "cannot_learn_skill_id": 0,
        "switch_skill_id": 106092,
        "is_default_skill": false,
        "is_sub_skill": false,
        "desc": {
          "ja_JP": "α：発動中、キュアアローの効果範囲拡大",
          "en_US": "α: Increases AOE field for Curative Field.\r"
        }
      },
      {
        "skill_id": 106092,
        "created_at": "2023-07-12 01:14:14",
        "updated_at": "2023-07-12 01:14:14",
        "skill_name": 58,
        "skill_desc_array": [
          {
            "desc": 647
          }
        ],
        "class_type": 6,
        "class_level": 50,
        "skill_type": 11,
        "ability_type": 2,
        "skill_mastery_param": [
          {
            "level": 1,
            "condition_class_level": 35
          }
        ],
        "condition_skill_id_1": 609,
        "condition_skill_level_1": 3,
        "condition_skill_id_2": 0,
        "condition_skill_level_2": 0,
        "cannot_learn_skill_id": 0,
        "switch_skill_id": 106091,
        "is_default_skill": false,
        "is_sub_skill": false,
        "desc": {
          "ja_JP": "β：発動時、自身に移動速度アップ・大付与",
          "en_US": "β: Applies a major speed boost while active.\r"
        }
      }
    ],
    "skillBackgroundImg": "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_B.png",
    "elementImg": "/UI/Icon/Attribute/UI_IconAttribute_Empty.png",
    "subcategoryName": {
      "ja_JP": "タクティカルスキル",
      "en_US": "Tactical Skill"
    },
    "entryTypes": [
      "Skill"
    ]
  },
  {
    "skill_id": 613,
    "created_at": "2023-07-12 01:14:14",
    "updated_at": "2023-07-12 01:14:14",
    "skill_name": 12,
    "skill_desc_array": [
      {
        "desc": 572
      },
      {
        "desc": 573
      },
      {
        "desc": 574
      }
    ],
    "class_type": 6,
    "class_level": 0,
    "skill_type": 4,
    "ability_type": 0,
    "skill_mastery_param": [
      {
        "level": 1,
        "condition_class_level": 9
      },
      {
        "level": 2,
        "condition_class_level": 28
      },
      {
        "level": 3,
        "condition_class_level": 47
      }
    ],
    "condition_skill_id_1": 0,
    "condition_skill_level_1": 0,
    "condition_skill_id_2": 0,
    "condition_skill_level_2": 0,
    "cannot_learn_skill_id": 0,
    "switch_skill_id": 0,
    "is_default_skill": true,
    "is_sub_skill": false,
    "id": "613",
    "name": {
      "ja_JP": "ヒーリングアロー",
      "en_US": "Healing Arrow"
    },
    "desc": {
      "ja_JP": "G1：上空に矢を放ち、狙った地点にHPを中回復するエリアを生成する\nG2：HP回復量増加\nG3：チャージ可能となり、チャージレベルが上昇するとエリアの範囲が拡大し、HP回復量も増加",
      "en_US": "G1: Fires an arrow into the sky to create an AOE field on the target area that heals a moderate amount of HP.\r\nG2: Increases the amount of HP recovered.\r\nG3: Can be charged. The higher the charge level, the greater the HP recovery."
    },
    "thumb": "/UI/Icon/PlayerSkill/Class6/UI_PlayerSkill_613.png",
    "classImg": "/UI/Icon/Class/UI_IconClass_06.png",
    "abilities": [
      {
        "skill_id": 106019,
        "created_at": "2023-07-12 01:14:14",
        "updated_at": "2023-07-12 01:14:14",
        "skill_name": 51,
        "skill_desc_array": [
          {
            "desc": 640
          }
        ],
        "class_type": 6,
        "class_level": 50,
        "skill_type": 11,
        "ability_type": 1,
        "skill_mastery_param": [
          {
            "level": 1,
            "condition_class_level": 35
          }
        ],
        "condition_skill_id_1": 613,
        "condition_skill_level_1": 3,
        "condition_skill_id_2": 0,
        "condition_skill_level_2": 0,
        "cannot_learn_skill_id": 0,
        "switch_skill_id": 106132,
        "is_default_skill": false,
        "is_sub_skill": false,
        "desc": {
          "ja_JP": "α：さらにHP回復量増加",
          "en_US": "α: Increases amount of HP restored even further.\r"
        }
      },
      {
        "skill_id": 106132,
        "created_at": "2023-07-12 01:14:14",
        "updated_at": "2023-07-12 01:14:14",
        "skill_name": 59,
        "skill_desc_array": [
          {
            "desc": 641
          }
        ],
        "class_type": 6,
        "class_level": 50,
        "skill_type": 11,
        "ability_type": 2,
        "skill_mastery_param": [
          {
            "level": 1,
            "condition_class_level": 35
          }
        ],
        "condition_skill_id_1": 613,
        "condition_skill_level_1": 3,
        "condition_skill_id_2": 0,
        "condition_skill_level_2": 0,
        "cannot_learn_skill_id": 0,
        "switch_skill_id": 106019,
        "is_default_skill": false,
        "is_sub_skill": false,
        "desc": {
          "ja_JP": "β：HP回復量が減少するが、インターバルが短くなる",
          "en_US": "β: Shortens cooldown time, but decreases amount of HP restored.\r"
        }
      }
    ],
    "skillBackgroundImg": "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_R.png",
    "elementImg": "/UI/Icon/Attribute/UI_IconAttribute_Empty.png",
    "subcategoryName": {
      "ja_JP": "タクティカルスキル",
      "en_US": "Tactical Skill"
    },
    "entryTypes": [
      "Skill"
    ]
  },
  {
    "skill_id": 615,
    "created_at": "2023-07-12 01:14:14",
    "updated_at": "2023-07-12 01:14:14",
    "skill_name": 14,
    "skill_desc_array": [
      {
        "desc": 578
      },
      {
        "desc": 579
      },
      {
        "desc": 580
      }
    ],
    "class_type": 6,
    "class_level": 0,
    "skill_type": 2,
    "ability_type": 0,
    "skill_mastery_param": [
      {
        "level": 1,
        "condition_class_level": 1
      },
      {
        "level": 2,
        "condition_class_level": 20
      },
      {
        "level": 3,
        "condition_class_level": 39
      }
    ],
    "condition_skill_id_1": 0,
    "condition_skill_level_1": 0,
    "condition_skill_id_2": 0,
    "condition_skill_level_2": 0,
    "cannot_learn_skill_id": 0,
    "switch_skill_id": 0,
    "is_default_skill": true,
    "is_sub_skill": false,
    "id": "615",
    "name": {
      "ja_JP": "ストライクアロー",
      "en_US": "Strikebolt"
    },
    "desc": {
      "ja_JP": "G1：強力な矢を放つ\nG2：チャージ可能となり、チャージレベルが上昇すると与ダメージ増加\nG3：さらにチャージが可能となり、チャージレベル上昇に応じて与ダメージ増加",
      "en_US": "G1: Unleashes an immensely powerful arrow.\r\nG2: Can be charged. The higher the charge level, the greater the damage.\r\nG3: Can be charged even more. The higher the charge level, the greater the damage."
    },
    "thumb": "/UI/Icon/PlayerSkill/Class6/UI_PlayerSkill_615.png",
    "classImg": "/UI/Icon/Class/UI_IconClass_06.png",
    "abilities": [
      {
        "skill_id": 106004,
        "created_at": "2023-07-12 01:14:14",
        "updated_at": "2023-07-12 01:14:14",
        "skill_name": 36,
        "skill_desc_array": [
          {
            "desc": 622
          }
        ],
        "class_type": 6,
        "class_level": 50,
        "skill_type": 11,
        "ability_type": 1,
        "skill_mastery_param": [
          {
            "level": 1,
            "condition_class_level": 35
          }
        ],
        "condition_skill_id_1": 615,
        "condition_skill_level_1": 3,
        "condition_skill_id_2": 0,
        "condition_skill_level_2": 0,
        "cannot_learn_skill_id": 0,
        "switch_skill_id": 106003,
        "is_default_skill": false,
        "is_sub_skill": false,
        "desc": {
          "ja_JP": "α：チャージ時間が延びるが、与ダメージが増加する",
          "en_US": "α: Increases charge time, but also increases damage.\r"
        }
      },
      {
        "skill_id": 106003,
        "created_at": "2023-07-12 01:14:14",
        "updated_at": "2023-07-12 01:14:14",
        "skill_name": 35,
        "skill_desc_array": [
          {
            "desc": 621
          }
        ],
        "class_type": 6,
        "class_level": 50,
        "skill_type": 11,
        "ability_type": 2,
        "skill_mastery_param": [
          {
            "level": 1,
            "condition_class_level": 35
          }
        ],
        "condition_skill_id_1": 615,
        "condition_skill_level_1": 3,
        "condition_skill_id_2": 0,
        "condition_skill_level_2": 0,
        "cannot_learn_skill_id": 0,
        "switch_skill_id": 106004,
        "is_default_skill": false,
        "is_sub_skill": false,
        "desc": {
          "ja_JP": "β：チャージ時間短縮",
          "en_US": "β: Shortens charge time.\r"
        }
      }
    ],
    "skillBackgroundImg": "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_A.png",
    "elementImg": "/UI/Icon/Attribute/UI_IconAttribute_Empty.png",
    "subcategoryName": {
      "ja_JP": "タクティカルスキル",
      "en_US": "Tactical Skill"
    },
    "entryTypes": [
      "Skill"
    ]
  },
  {
    "skill_id": 616,
    "created_at": "2023-07-12 01:14:14",
    "updated_at": "2023-07-12 01:14:14",
    "skill_name": 15,
    "skill_desc_array": [
      {
        "desc": 581
      },
      {
        "desc": 582
      },
      {
        "desc": 583
      }
    ],
    "class_type": 6,
    "class_level": 0,
    "skill_type": 0,
    "ability_type": 0,
    "skill_mastery_param": [
      {
        "level": 1,
        "condition_class_level": 1
      },
      {
        "level": 2,
        "condition_class_level": 5
      },
      {
        "level": 3,
        "condition_class_level": 12
      }
    ],
    "condition_skill_id_1": 0,
    "condition_skill_level_1": 0,
    "condition_skill_id_2": 0,
    "condition_skill_level_2": 0,
    "cannot_learn_skill_id": 0,
    "switch_skill_id": 0,
    "is_default_skill": true,
    "is_sub_skill": false,
    "id": "616",
    "name": {
      "ja_JP": "アローラッシュ",
      "en_US": "Arrow Rush"
    },
    "desc": {
      "ja_JP": "G1：矢を射出する4段攻撃。攻撃中に移動可能\nG2：４段目の攻撃の与ダメージ増加\nG3：前移動入力しながら通常攻撃ボタンを長押しすると1段目が土属性範囲攻撃になる",
      "en_US": "G1: Fires off a four stage barrage of arrows. You can move while using this attack.\r\nG2: Increases damage output on the fourth stage attack.\r\nG3: Holding the standard attack button while moving forward will change the first stage into an earth-aspected AOE attack."
    },
    "thumb": "/UI/Icon/PlayerSkill/Common/UI_PlayerSkill_Main.png",
    "classImg": "/UI/Icon/Class/UI_IconClass_06.png",
    "abilities": [],
    "skillBackgroundImg": "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_Empty.png",
    "elementImg": "/UI/Icon/Attribute/UI_IconAttribute_Empty.png",
    "subcategoryName": {
      "ja_JP": "ベースアクション",
      "en_US": "Basic Attack"
    },
    "entryTypes": [
      "Skill"
    ]
  },
  {
    "skill_id": 617,
    "created_at": "2023-07-12 01:14:14",
    "updated_at": "2023-07-12 01:14:14",
    "skill_name": 16,
    "skill_desc_array": [
      {
        "desc": 584
      },
      {
        "desc": 585
      },
      {
        "desc": 586
      }
    ],
    "class_type": 6,
    "class_level": 0,
    "skill_type": 2,
    "ability_type": 0,
    "skill_mastery_param": [
      {
        "level": 1,
        "condition_class_level": 7
      },
      {
        "level": 2,
        "condition_class_level": 26
      },
      {
        "level": 3,
        "condition_class_level": 45
      }
    ],
    "condition_skill_id_1": 0,
    "condition_skill_level_1": 0,
    "condition_skill_id_2": 0,
    "condition_skill_level_2": 0,
    "cannot_learn_skill_id": 0,
    "switch_skill_id": 0,
    "is_default_skill": true,
    "is_sub_skill": false,
    "id": "617",
    "name": {
      "ja_JP": "ヒプノブラスト",
      "en_US": "Hypnoblast"
    },
    "desc": {
      "ja_JP": "G1：矢を放ち、ヒットしたエネミーにスリープを付与する\nG2：インターバル短縮\nG3：スリープ持続時間延長",
      "en_US": "G1: Fires an arrow that inflicts sleep on foes.\r\nG2: Shortens cooldown.\r\nG3: Increases sleep duration."
    },
    "thumb": "/UI/Icon/PlayerSkill/Class6/UI_PlayerSkill_617.png",
    "classImg": "/UI/Icon/Class/UI_IconClass_06.png",
    "abilities": [
      {
        "skill_id": 106006,
        "created_at": "2023-07-12 01:14:14",
        "updated_at": "2023-07-12 01:14:14",
        "skill_name": 38,
        "skill_desc_array": [
          {
            "desc": 624
          }
        ],
        "class_type": 6,
        "class_level": 50,
        "skill_type": 11,
        "ability_type": 1,
        "skill_mastery_param": [
          {
            "level": 1,
            "condition_class_level": 35
          }
        ],
        "condition_skill_id_1": 617,
        "condition_skill_level_1": 3,
        "condition_skill_id_2": 0,
        "condition_skill_level_2": 0,
        "cannot_learn_skill_id": 0,
        "switch_skill_id": 106171,
        "is_default_skill": false,
        "is_sub_skill": false,
        "desc": {
          "ja_JP": "α：スキルボタン長押しでチャージが可能となり、チャージレベルが上昇するとエネミーを貫通するようになる",
          "en_US": "α: Holding the skill button will charge this skill. Raising the charge level adds penetration to the attack.\r"
        }
      },
      {
        "skill_id": 106171,
        "created_at": "2023-07-12 01:14:14",
        "updated_at": "2023-07-12 01:14:14",
        "skill_name": 60,
        "skill_desc_array": [
          {
            "desc": 625
          }
        ],
        "class_type": 6,
        "class_level": 50,
        "skill_type": 11,
        "ability_type": 2,
        "skill_mastery_param": [
          {
            "level": 1,
            "condition_class_level": 35
          }
        ],
        "condition_skill_id_1": 617,
        "condition_skill_level_1": 3,
        "condition_skill_id_2": 0,
        "condition_skill_level_2": 0,
        "cannot_learn_skill_id": 0,
        "switch_skill_id": 106006,
        "is_default_skill": false,
        "is_sub_skill": false,
        "desc": {
          "ja_JP": "β：攻撃ヒット時、攻撃力ダウン・小付与",
          "en_US": "β: Inflicts a minor attack down debuff on enemies upon hit.\r"
        }
      }
    ],
    "skillBackgroundImg": "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_A_D.png",
    "elementImg": "/UI/Icon/Attribute/UI_IconAttribute_Empty.png",
    "subcategoryName": {
      "ja_JP": "タクティカルスキル",
      "en_US": "Tactical Skill"
    },
    "entryTypes": [
      "Skill"
    ]
  },
  {
    "skill_id": 618,
    "created_at": "2023-07-12 01:14:14",
    "updated_at": "2023-07-12 01:14:14",
    "skill_name": 17,
    "skill_desc_array": [
      {
        "desc": 587
      },
      {
        "desc": 588
      },
      {
        "desc": 589
      }
    ],
    "class_type": 6,
    "class_level": 0,
    "skill_type": 2,
    "ability_type": 0,
    "skill_mastery_param": [
      {
        "level": 1,
        "condition_class_level": 11
      },
      {
        "level": 2,
        "condition_class_level": 30
      },
      {
        "level": 3,
        "condition_class_level": 49
      }
    ],
    "condition_skill_id_1": 0,
    "condition_skill_level_1": 0,
    "condition_skill_id_2": 0,
    "condition_skill_level_2": 0,
    "cannot_learn_skill_id": 0,
    "switch_skill_id": 0,
    "is_default_skill": true,
    "is_sub_skill": false,
    "id": "618",
    "name": {
      "ja_JP": "レゾナンスショット",
      "en_US": "Fell Resonance"
    },
    "desc": {
      "ja_JP": "G1：ヒットしたエネミーに蓄積されている属性蓄積値の一部を、周囲に拡散する効果を持つ矢を放つ\nG2：属性蓄積値の拡散範囲拡大\nG3：拡散する属性蓄積値増加",
      "en_US": "G1: Unleashes an arrow that spreads a portion of the elemental build-up of one enemy to all foes around it.\r\nG2: Increases spread of elemental build-up.\r\nG3: Increases amount of elemental build-up spread."
    },
    "thumb": "/UI/Icon/PlayerSkill/Class6/UI_PlayerSkill_618.png",
    "classImg": "/UI/Icon/Class/UI_IconClass_06.png",
    "abilities": [
      {
        "skill_id": 106012,
        "created_at": "2023-07-12 01:14:14",
        "updated_at": "2023-07-12 01:14:14",
        "skill_name": 44,
        "skill_desc_array": [
          {
            "desc": 631
          }
        ],
        "class_type": 6,
        "class_level": 50,
        "skill_type": 11,
        "ability_type": 1,
        "skill_mastery_param": [
          {
            "level": 1,
            "condition_class_level": 35
          }
        ],
        "condition_skill_id_1": 618,
        "condition_skill_level_1": 3,
        "condition_skill_id_2": 0,
        "condition_skill_level_2": 0,
        "cannot_learn_skill_id": 0,
        "switch_skill_id": 106181,
        "is_default_skill": false,
        "is_sub_skill": false,
        "desc": {
          "ja_JP": "α：チャージ可能となり、チャージレベルが上昇すると拡散範囲が拡大される",
          "en_US": "α: Can be charged. The higher the charge level, the wider the area of elemental spread.\r"
        }
      },
      {
        "skill_id": 106181,
        "created_at": "2023-07-12 01:14:14",
        "updated_at": "2023-07-12 01:14:14",
        "skill_name": 61,
        "skill_desc_array": [
          {
            "desc": 632
          }
        ],
        "class_type": 6,
        "class_level": 50,
        "skill_type": 11,
        "ability_type": 2,
        "skill_mastery_param": [
          {
            "level": 1,
            "condition_class_level": 35
          }
        ],
        "condition_skill_id_1": 618,
        "condition_skill_level_1": 3,
        "condition_skill_id_2": 0,
        "condition_skill_level_2": 0,
        "cannot_learn_skill_id": 0,
        "switch_skill_id": 106012,
        "is_default_skill": false,
        "is_sub_skill": false,
        "desc": {
          "ja_JP": "β：インターバルが延びるが、状態異常も拡散するようになる",
          "en_US": "β: Spreads elemental afflictions, but has longer cooldown.\r"
        }
      }
    ],
    "skillBackgroundImg": "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_A_D.png",
    "elementImg": "/UI/Icon/Attribute/UI_IconAttribute_Empty.png",
    "subcategoryName": {
      "ja_JP": "タクティカルスキル",
      "en_US": "Tactical Skill"
    },
    "entryTypes": [
      "Skill"
    ]
  },
  {
    "skill_id": 619,
    "created_at": "2023-07-12 01:14:14",
    "updated_at": "2023-07-12 01:14:14",
    "skill_name": 18,
    "skill_desc_array": [
      {
        "desc": 590
      },
      {
        "desc": 591
      },
      {
        "desc": 592
      }
    ],
    "class_type": 6,
    "class_level": 0,
    "skill_type": 4,
    "ability_type": 0,
    "skill_mastery_param": [
      {
        "level": 1,
        "condition_class_level": 6
      },
      {
        "level": 2,
        "condition_class_level": 25
      },
      {
        "level": 3,
        "condition_class_level": 44
      }
    ],
    "condition_skill_id_1": 0,
    "condition_skill_level_1": 0,
    "condition_skill_id_2": 0,
    "condition_skill_level_2": 0,
    "cannot_learn_skill_id": 0,
    "switch_skill_id": 0,
    "is_default_skill": true,
    "is_sub_skill": false,
    "id": "619",
    "name": {
      "ja_JP": "ダストフォース",
      "en_US": "Force of Nature"
    },
    "desc": {
      "ja_JP": "G1：上空に矢を放ち、狙った地点にエネミーに付与されている属性状態異常を強化するエリアを生成する\nG2：エリア持続時間延長\nG3：チャージ可能となり、チャージレベルが上昇するとエリアの範囲が拡大される",
      "en_US": "G1: Fires an arrow into the air to create an AOE field that boosts elemental afflictions on foes within it.\r\nG2: Extends duration of AOE field.\r\nG3: Can be charged. The higher the charge level, the larger the AOE field."
    },
    "thumb": "/UI/Icon/PlayerSkill/Class6/UI_PlayerSkill_619.png",
    "classImg": "/UI/Icon/Class/UI_IconClass_06.png",
    "abilities": [
      {
        "skill_id": 106017,
        "created_at": "2023-07-12 01:14:14",
        "updated_at": "2023-07-12 01:14:14",
        "skill_name": 49,
        "skill_desc_array": [
          {
            "desc": 637
          }
        ],
        "class_type": 6,
        "class_level": 50,
        "skill_type": 11,
        "ability_type": 1,
        "skill_mastery_param": [
          {
            "level": 1,
            "condition_class_level": 35
          }
        ],
        "condition_skill_id_1": 619,
        "condition_skill_level_1": 3,
        "condition_skill_id_2": 0,
        "condition_skill_level_2": 0,
        "cannot_learn_skill_id": 0,
        "switch_skill_id": 106018,
        "is_default_skill": false,
        "is_sub_skill": false,
        "desc": {
          "ja_JP": "α：範囲内のエネミーに属性耐性値ダウン・小付与",
          "en_US": "α: Slightly reduces the elemental resistance of foes within the AOE.\r"
        }
      },
      {
        "skill_id": 106018,
        "created_at": "2023-07-12 01:14:14",
        "updated_at": "2023-07-12 01:14:14",
        "skill_name": 50,
        "skill_desc_array": [
          {
            "desc": 638
          }
        ],
        "class_type": 6,
        "class_level": 50,
        "skill_type": 11,
        "ability_type": 2,
        "skill_mastery_param": [
          {
            "level": 1,
            "condition_class_level": 35
          }
        ],
        "condition_skill_id_1": 619,
        "condition_skill_level_1": 3,
        "condition_skill_id_2": 0,
        "condition_skill_level_2": 0,
        "cannot_learn_skill_id": 0,
        "switch_skill_id": 106017,
        "is_default_skill": false,
        "is_sub_skill": false,
        "desc": {
          "ja_JP": "β：範囲内のエネミーに移動速度ダウン・大付与",
          "en_US": "β: Inflicts a major speed down debuff on enemies within the AOE field.\r"
        }
      }
    ],
    "skillBackgroundImg": "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_A_D.png",
    "elementImg": "/UI/Icon/Attribute/UI_IconAttribute_Empty.png",
    "subcategoryName": {
      "ja_JP": "タクティカルスキル",
      "en_US": "Tactical Skill"
    },
    "entryTypes": [
      "Skill"
    ]
  },
  {
    "skill_id": 620,
    "created_at": "2023-07-12 01:14:14",
    "updated_at": "2023-07-12 01:14:14",
    "skill_name": 19,
    "skill_desc_array": [
      {
        "desc": 593
      },
      {
        "desc": 594
      },
      {
        "desc": 595
      }
    ],
    "class_type": 6,
    "class_level": 0,
    "skill_type": 3,
    "ability_type": 0,
    "skill_mastery_param": [
      {
        "level": 1,
        "condition_class_level": 8
      },
      {
        "level": 2,
        "condition_class_level": 27
      },
      {
        "level": 3,
        "condition_class_level": 46
      }
    ],
    "condition_skill_id_1": 0,
    "condition_skill_level_1": 0,
    "condition_skill_id_2": 0,
    "condition_skill_level_2": 0,
    "cannot_learn_skill_id": 0,
    "switch_skill_id": 0,
    "is_default_skill": true,
    "is_sub_skill": false,
    "id": "620",
    "name": {
      "ja_JP": "ショックウェーブ",
      "en_US": "Sonic Boom"
    },
    "desc": {
      "ja_JP": "G1：エネミーを貫通する矢を放ち、矢の周囲に衝撃波を発生させる\nG2：衝撃波の範囲拡大\nG3：矢の与ダメージ増加",
      "en_US": "G1: Fires an arrow that penetrates through foes and emits a shockwave surrounding it.\r\nG2: Increases the radius of the shockwave.\r\nG3: Increases damage output from the arrow."
    },
    "thumb": "/UI/Icon/PlayerSkill/Class6/UI_PlayerSkill_620.png",
    "classImg": "/UI/Icon/Class/UI_IconClass_06.png",
    "abilities": [
      {
        "skill_id": 106007,
        "created_at": "2023-07-12 01:14:14",
        "updated_at": "2023-07-12 01:14:14",
        "skill_name": 39,
        "skill_desc_array": [
          {
            "desc": 626
          }
        ],
        "class_type": 6,
        "class_level": 50,
        "skill_type": 11,
        "ability_type": 1,
        "skill_mastery_param": [
          {
            "level": 1,
            "condition_class_level": 35
          }
        ],
        "condition_skill_id_1": 620,
        "condition_skill_level_1": 3,
        "condition_skill_id_2": 0,
        "condition_skill_level_2": 0,
        "cannot_learn_skill_id": 0,
        "switch_skill_id": 106008,
        "is_default_skill": false,
        "is_sub_skill": false,
        "desc": {
          "ja_JP": "α：矢と衝撃波の与ダメージ増加",
          "en_US": "α: Increases damage from both arrow and shockwave.\r"
        }
      },
      {
        "skill_id": 106008,
        "created_at": "2023-07-12 01:14:14",
        "updated_at": "2023-07-12 01:14:14",
        "skill_name": 40,
        "skill_desc_array": [
          {
            "desc": 627
          }
        ],
        "class_type": 6,
        "class_level": 50,
        "skill_type": 11,
        "ability_type": 2,
        "skill_mastery_param": [
          {
            "level": 1,
            "condition_class_level": 35
          }
        ],
        "condition_skill_id_1": 620,
        "condition_skill_level_1": 3,
        "condition_skill_id_2": 0,
        "condition_skill_level_2": 0,
        "cannot_learn_skill_id": 0,
        "switch_skill_id": 106007,
        "is_default_skill": false,
        "is_sub_skill": false,
        "desc": {
          "ja_JP": "β：衝撃波の範囲が拡大し、与ダメージも増加",
          "en_US": "β: Increases shockwave radius and damage output.\r"
        }
      }
    ],
    "skillBackgroundImg": "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_A.png",
    "elementImg": "/UI/Icon/Attribute/UI_IconAttribute_Empty.png",
    "subcategoryName": {
      "ja_JP": "タクティカルスキル",
      "en_US": "Tactical Skill"
    },
    "entryTypes": [
      "Skill"
    ]
  },
  {
    "skill_id": 621,
    "created_at": "2023-07-12 01:14:14",
    "updated_at": "2023-07-12 01:14:14",
    "skill_name": 20,
    "skill_desc_array": [
      {
        "desc": 596
      },
      {
        "desc": 597
      },
      {
        "desc": 598
      }
    ],
    "class_type": 6,
    "class_level": 0,
    "skill_type": 3,
    "ability_type": 0,
    "skill_mastery_param": [
      {
        "level": 1,
        "condition_class_level": 10
      },
      {
        "level": 2,
        "condition_class_level": 29
      },
      {
        "level": 3,
        "condition_class_level": 48
      }
    ],
    "condition_skill_id_1": 0,
    "condition_skill_level_1": 0,
    "condition_skill_id_2": 0,
    "condition_skill_level_2": 0,
    "cannot_learn_skill_id": 0,
    "switch_skill_id": 0,
    "is_default_skill": true,
    "is_sub_skill": false,
    "id": "621",
    "name": {
      "ja_JP": "ツインフラッシュ",
      "en_US": "Dual Force"
    },
    "desc": {
      "ja_JP": "G1：矢を放ち、ヒットした地点に味方に与ダメージアップ・小を付与、エネミーに被ダメージアップ・小を付与するエリアを生成する\nG2：与ダメージアップ、被ダメージアップの効果時間延長\nG3：エリア持続時間延長",
      "en_US": "G1: Fires an arrow that creates an AOE field on the targeted area. Gives allies a small damage boost and inflicts increased vulnerability on foes.\r\nG2: Extends duration of damage boost and increased vulnerability.\r\nG3: Extends duration of AOE field."
    },
    "thumb": "/UI/Icon/PlayerSkill/Class6/UI_PlayerSkill_621.png",
    "classImg": "/UI/Icon/Class/UI_IconClass_06.png",
    "abilities": [
      {
        "skill_id": 106212,
        "created_at": "2023-07-12 01:14:14",
        "updated_at": "2023-07-12 01:14:14",
        "skill_name": 66,
        "skill_desc_array": [
          {
            "desc": 1193
          }
        ],
        "class_type": 6,
        "class_level": 50,
        "skill_type": 11,
        "ability_type": 1,
        "skill_mastery_param": [
          {
            "level": 1,
            "condition_class_level": 35
          }
        ],
        "condition_skill_id_1": 621,
        "condition_skill_level_1": 3,
        "condition_skill_id_2": 0,
        "condition_skill_level_2": 0,
        "cannot_learn_skill_id": 0,
        "switch_skill_id": 106211,
        "is_default_skill": false,
        "is_sub_skill": false,
        "desc": {
          "ja_JP": "α：エリア範囲拡大",
          "en_US": "α: Increases size of AOE field.\r"
        }
      },
      {
        "skill_id": 106211,
        "created_at": "2023-07-12 01:14:14",
        "updated_at": "2023-07-12 01:14:14",
        "skill_name": 65,
        "skill_desc_array": [
          {
            "desc": 1192
          }
        ],
        "class_type": 6,
        "class_level": 50,
        "skill_type": 11,
        "ability_type": 2,
        "skill_mastery_param": [
          {
            "level": 1,
            "condition_class_level": 35
          }
        ],
        "condition_skill_id_1": 621,
        "condition_skill_level_1": 3,
        "condition_skill_id_2": 0,
        "condition_skill_level_2": 0,
        "cannot_learn_skill_id": 0,
        "switch_skill_id": 106212,
        "is_default_skill": false,
        "is_sub_skill": false,
        "desc": {
          "ja_JP": "β：ヒット時にエリアが生成されなくなるが、矢が貫通する様になる",
          "en_US": "β: Adds penetration to the arrow, but does not activate the AOE field.\r"
        }
      }
    ],
    "skillBackgroundImg": "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_B_D.png",
    "elementImg": "/UI/Icon/Attribute/UI_IconAttribute_Empty.png",
    "subcategoryName": {
      "ja_JP": "タクティカルスキル",
      "en_US": "Tactical Skill"
    },
    "entryTypes": [
      "Skill"
    ]
  },
  {
    "skill_id": 622,
    "created_at": "2023-07-12 01:14:14",
    "updated_at": "2023-07-12 01:14:14",
    "skill_name": 21,
    "skill_desc_array": [
      {
        "desc": 599
      },
      {
        "desc": 600
      },
      {
        "desc": 601
      }
    ],
    "class_type": 6,
    "class_level": 0,
    "skill_type": 5,
    "ability_type": 0,
    "skill_mastery_param": [
      {
        "level": 1,
        "condition_class_level": 12
      },
      {
        "level": 2,
        "condition_class_level": 31
      },
      {
        "level": 3,
        "condition_class_level": 50
      }
    ],
    "condition_skill_id_1": 0,
    "condition_skill_level_1": 0,
    "condition_skill_id_2": 0,
    "condition_skill_level_2": 0,
    "cannot_learn_skill_id": 0,
    "switch_skill_id": 0,
    "is_default_skill": true,
    "is_sub_skill": false,
    "id": "622",
    "name": {
      "ja_JP": "リフレッシュエリア",
      "en_US": "Eden's Grace"
    },
    "desc": {
      "ja_JP": "G1：地面に矢を放ち、自身とパーティメンバーの属性状態異常を解除し、属性蓄積値をリセットするエリアを生成する\nG2：インターバル短縮\nG3：エリア範囲拡大",
      "en_US": "G1: Fires an arrow at the ground to create an AOE field that removes elemental afflictions from allies and resets all elemental build-up.\r\nG2: Shortens cooldown time.\r\nG3: Increases the size of the AOE field."
    },
    "thumb": "/UI/Icon/PlayerSkill/Class6/UI_PlayerSkill_622.png",
    "classImg": "/UI/Icon/Class/UI_IconClass_06.png",
    "abilities": [
      {
        "skill_id": 106221,
        "created_at": "2023-07-12 01:14:14",
        "updated_at": "2023-07-12 01:14:14",
        "skill_name": 67,
        "skill_desc_array": [
          {
            "desc": 1194
          }
        ],
        "class_type": 6,
        "class_level": 50,
        "skill_type": 11,
        "ability_type": 1,
        "skill_mastery_param": [
          {
            "level": 1,
            "condition_class_level": 35
          }
        ],
        "condition_skill_id_1": 622,
        "condition_skill_level_1": 3,
        "condition_skill_id_2": 0,
        "condition_skill_level_2": 0,
        "cannot_learn_skill_id": 0,
        "switch_skill_id": 106222,
        "is_default_skill": false,
        "is_sub_skill": false,
        "desc": {
          "ja_JP": "α：エリアの効果に状態異常解除追加",
          "en_US": "α: Adds status affliction removal to AOE field effects.\r"
        }
      },
      {
        "skill_id": 106222,
        "created_at": "2023-07-12 01:14:14",
        "updated_at": "2023-07-12 01:14:14",
        "skill_name": 68,
        "skill_desc_array": [
          {
            "desc": 1195
          }
        ],
        "class_type": 6,
        "class_level": 50,
        "skill_type": 11,
        "ability_type": 2,
        "skill_mastery_param": [
          {
            "level": 1,
            "condition_class_level": 35
          }
        ],
        "condition_skill_id_1": 622,
        "condition_skill_level_1": 3,
        "condition_skill_id_2": 0,
        "condition_skill_level_2": 0,
        "cannot_learn_skill_id": 0,
        "switch_skill_id": 106221,
        "is_default_skill": false,
        "is_sub_skill": false,
        "desc": {
          "ja_JP": "β：エリアの効果にHP継続回復・小付与追加",
          "en_US": "β: Adds minor HP regen to AOE field effects.\r"
        }
      }
    ],
    "skillBackgroundImg": "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_R.png",
    "elementImg": "/UI/Icon/Attribute/UI_IconAttribute_Empty.png",
    "subcategoryName": {
      "ja_JP": "タクティカルスキル",
      "en_US": "Tactical Skill"
    },
    "entryTypes": [
      "Skill"
    ]
  },
  {
    "skill_id": 623,
    "created_at": "2023-07-12 01:14:14",
    "updated_at": "2023-07-12 01:14:14",
    "skill_name": 22,
    "skill_desc_array": [
      {
        "desc": 602
      },
      {
        "desc": 603
      },
      {
        "desc": 604
      }
    ],
    "class_type": 6,
    "class_level": 0,
    "skill_type": 5,
    "ability_type": 0,
    "skill_mastery_param": [
      {
        "level": 1,
        "condition_class_level": 5
      },
      {
        "level": 2,
        "condition_class_level": 24
      },
      {
        "level": 3,
        "condition_class_level": 43
      }
    ],
    "condition_skill_id_1": 0,
    "condition_skill_level_1": 0,
    "condition_skill_id_2": 0,
    "condition_skill_level_2": 0,
    "cannot_learn_skill_id": 0,
    "switch_skill_id": 0,
    "is_default_skill": true,
    "is_sub_skill": false,
    "id": "623",
    "name": {
      "ja_JP": "グラウンドブレイク",
      "en_US": "Groundbreaker"
    },
    "desc": {
      "ja_JP": "G1：上空に矢を放ち、狙った地点に継続的に土属性のダメージを与えるエリアを生成する\nG2：エリア範囲拡大\nG3：エリア内のエネミーに移動速度ダウン・中付与",
      "en_US": "G1: Fires an arrow into the air to create an AOE field on the targeted area that deals continuous earth damage.\r\nG2: Increases the size of the AOE field.\r\nG3: Inflicts a moderate speed down debuff on enemies within the AOE field."
    },
    "thumb": "/UI/Icon/PlayerSkill/Class6/UI_PlayerSkill_623.png",
    "classImg": "/UI/Icon/Class/UI_IconClass_06.png",
    "abilities": [
      {
        "skill_id": 106231,
        "created_at": "2023-07-12 01:14:14",
        "updated_at": "2023-07-12 01:14:14",
        "skill_name": 69,
        "skill_desc_array": [
          {
            "desc": 1196
          }
        ],
        "class_type": 6,
        "class_level": 50,
        "skill_type": 11,
        "ability_type": 1,
        "skill_mastery_param": [
          {
            "level": 1,
            "condition_class_level": 35
          }
        ],
        "condition_skill_id_1": 623,
        "condition_skill_level_1": 3,
        "condition_skill_id_2": 0,
        "condition_skill_level_2": 0,
        "cannot_learn_skill_id": 0,
        "switch_skill_id": 106232,
        "is_default_skill": false,
        "is_sub_skill": false,
        "desc": {
          "ja_JP": "α：エリア持続時間延長",
          "en_US": "α: Extends duration of AOE field.\r"
        }
      },
      {
        "skill_id": 106232,
        "created_at": "2023-07-12 01:14:14",
        "updated_at": "2023-07-12 01:14:14",
        "skill_name": 70,
        "skill_desc_array": [
          {
            "desc": 1197
          }
        ],
        "class_type": 6,
        "class_level": 50,
        "skill_type": 11,
        "ability_type": 2,
        "skill_mastery_param": [
          {
            "level": 1,
            "condition_class_level": 35
          }
        ],
        "condition_skill_id_1": 623,
        "condition_skill_level_1": 3,
        "condition_skill_id_2": 0,
        "condition_skill_level_2": 0,
        "cannot_learn_skill_id": 0,
        "switch_skill_id": 106231,
        "is_default_skill": false,
        "is_sub_skill": false,
        "desc": {
          "ja_JP": "β：移動速度ダウンの効果時間延長",
          "en_US": "β: Extends duration of speed down effect.\r"
        }
      }
    ],
    "skillBackgroundImg": "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_A_D.png",
    "elementImg": "/UI/Icon/Attribute/UI_IconAttribute_4.png",
    "subcategoryName": {
      "ja_JP": "タクティカルスキル",
      "en_US": "Tactical Skill"
    },
    "entryTypes": [
      "Skill"
    ]
  },
  {
    "skill_id": 698,
    "created_at": "2023-07-12 01:14:14",
    "updated_at": "2023-07-12 01:14:14",
    "skill_name": 1657,
    "skill_desc_array": [
      {
        "desc": 1820
      }
    ],
    "class_type": 6,
    "class_level": 0,
    "skill_type": 13,
    "ability_type": 0,
    "skill_mastery_param": [],
    "condition_skill_id_1": 0,
    "condition_skill_level_1": 0,
    "condition_skill_id_2": 0,
    "condition_skill_level_2": 0,
    "cannot_learn_skill_id": 0,
    "switch_skill_id": 0,
    "is_default_skill": true,
    "is_sub_skill": false,
    "id": "698",
    "name": {
      "ja_JP": "BLS受け身",
      "en_US": "BLS Defensive"
    },
    "desc": {
      "ja_JP": "Dummy",
      "en_US": "Dummy"
    },
    "thumb": "/UI/Icon/Class/UI_IconClass_Nodata.png",
    "classImg": "/UI/Icon/Class/UI_IconClass_06.png",
    "abilities": [],
    "skillBackgroundImg": "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_Empty.png",
    "elementImg": "/UI/Icon/Attribute/UI_IconAttribute_Empty.png",
    "subcategoryName": {
      "ja_JP": "受け身",
      "en_US": "受け身"
    },
    "entryTypes": [
      "Skill"
    ]
  },
  {
    "skill_id": 699,
    "created_at": "2023-07-12 01:14:14",
    "updated_at": "2023-07-12 01:14:14",
    "skill_name": 1652,
    "skill_desc_array": [
      {
        "desc": 1821
      }
    ],
    "class_type": 6,
    "class_level": 0,
    "skill_type": 12,
    "ability_type": 0,
    "skill_mastery_param": [],
    "condition_skill_id_1": 0,
    "condition_skill_level_1": 0,
    "condition_skill_id_2": 0,
    "condition_skill_level_2": 0,
    "cannot_learn_skill_id": 0,
    "switch_skill_id": 0,
    "is_default_skill": true,
    "is_sub_skill": false,
    "id": "699",
    "name": {
      "ja_JP": "BLSエネミー踏み台ジャンプ",
      "en_US": "BLS Springboard"
    },
    "desc": {
      "ja_JP": "Dummy",
      "en_US": "Dummy"
    },
    "thumb": "/UI/Icon/Class/UI_IconClass_Nodata.png",
    "classImg": "/UI/Icon/Class/UI_IconClass_06.png",
    "abilities": [],
    "skillBackgroundImg": "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_Empty.png",
    "elementImg": "/UI/Icon/Attribute/UI_IconAttribute_Empty.png",
    "subcategoryName": {
      "ja_JP": "踏み台ジャンプ",
      "en_US": "Springboard Jump"
    },
    "entryTypes": [
      "Skill"
    ]
  },
  {
    "skill_id": 106205,
    "created_at": "2023-07-12 01:14:14",
    "updated_at": "2023-07-12 01:14:14",
    "skill_name": 63,
    "skill_desc_array": [
      {
        "desc": 1186
      },
      {
        "desc": 1187
      },
      {
        "desc": 1188
      }
    ],
    "class_type": 6,
    "class_level": 0,
    "skill_type": 8,
    "ability_type": 100,
    "skill_mastery_param": [
      {
        "level": 1,
        "condition_class_level": 10
      },
      {
        "level": 2,
        "condition_class_level": 22
      },
      {
        "level": 3,
        "condition_class_level": 34
      }
    ],
    "condition_skill_id_1": 0,
    "condition_skill_level_1": 0,
    "condition_skill_id_2": 0,
    "condition_skill_level_2": 0,
    "cannot_learn_skill_id": 0,
    "switch_skill_id": 0,
    "is_default_skill": true,
    "is_sub_skill": false,
    "id": "106205",
    "name": {
      "ja_JP": "ファストエイド",
      "en_US": "First Response"
    },
    "desc": {
      "ja_JP": "G1：プレイヤーを救護する速度が上昇する\nG2：救護速度上昇\nG3：救護速度上昇",
      "en_US": "G1: Shortens time it takes to rescue players.\r\nG2: Shortens time it takes to rescue players even more.\r\nG3: Shortens time it takes to rescue players even more."
    },
    "thumb": "/UI/Icon/PlayerAbility/Class/Class6/UI_PlayerAbilityC_106205.png",
    "classImg": "/UI/Icon/Class/UI_IconClass_06.png",
    "abilities": [],
    "skillBackgroundImg": "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_Empty.png",
    "elementImg": "/UI/Icon/Attribute/UI_IconAttribute_Empty.png",
    "subcategoryName": {
      "ja_JP": "クラス共有アビリティ",
      "en_US": "Class-shared Ability"
    },
    "entryTypes": [
      "Skill"
    ]
  },
  {
    "skill_id": 106206,
    "created_at": "2023-07-12 01:14:14",
    "updated_at": "2023-07-12 01:14:14",
    "skill_name": 64,
    "skill_desc_array": [
      {
        "desc": 1189
      },
      {
        "desc": 1190
      },
      {
        "desc": 1191
      }
    ],
    "class_type": 6,
    "class_level": 0,
    "skill_type": 8,
    "ability_type": 0,
    "skill_mastery_param": [
      {
        "level": 1,
        "condition_class_level": 16
      },
      {
        "level": 2,
        "condition_class_level": 28
      },
      {
        "level": 3,
        "condition_class_level": 40
      }
    ],
    "condition_skill_id_1": 0,
    "condition_skill_level_1": 0,
    "condition_skill_id_2": 0,
    "condition_skill_level_2": 0,
    "cannot_learn_skill_id": 0,
    "switch_skill_id": 0,
    "is_default_skill": true,
    "is_sub_skill": false,
    "id": "106206",
    "name": {
      "ja_JP": "メディック",
      "en_US": "Medic"
    },
    "desc": {
      "ja_JP": "G1：自身がHPを回復するアイテム、スキル、イマジン使用時、回復量が小増加する\nG2：回復量増加\nG3：回復量増加",
      "en_US": "G1: Slightly increases HP healed when using recovery items, skills, or echoes on self.\r\nG2: Increases amount of HP restored.\r\nG3: Increases amount of HP restored even more."
    },
    "thumb": "/UI/Icon/PlayerAbility/Class/Class6/UI_PlayerAbilityC_106206.png",
    "classImg": "/UI/Icon/Class/UI_IconClass_06.png",
    "abilities": [],
    "skillBackgroundImg": "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_Empty.png",
    "elementImg": "/UI/Icon/Attribute/UI_IconAttribute_Empty.png",
    "subcategoryName": {
      "ja_JP": "クラス限定アビリティ",
      "en_US": "Class-specific Ability"
    },
    "entryTypes": [
      "Skill"
    ]
  },
  {
    "skill_id": 106251,
    "created_at": "2023-07-12 01:14:14",
    "updated_at": "2023-07-12 01:14:14",
    "skill_name": 2055,
    "skill_desc_array": [
      {
        "desc": 557
      }
    ],
    "class_type": 6,
    "class_level": 50,
    "skill_type": 11,
    "ability_type": 1,
    "skill_mastery_param": [
      {
        "level": 1,
        "condition_class_level": 35
      }
    ],
    "condition_skill_id_1": 625,
    "condition_skill_level_1": 3,
    "condition_skill_id_2": 0,
    "condition_skill_level_2": 0,
    "cannot_learn_skill_id": 0,
    "switch_skill_id": 106252,
    "is_default_skill": false,
    "is_sub_skill": false,
    "id": "106251",
    "name": {
      "ja_JP": "-",
      "en_US": "-"
    },
    "desc": {
      "ja_JP": "Dummy",
      "en_US": "Dummy"
    },
    "thumb": "/UI/Icon/Class/UI_IconClass_Nodata.png",
    "classImg": "/UI/Icon/Class/UI_IconClass_06.png",
    "abilities": [],
    "skillBackgroundImg": "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_Empty.png",
    "elementImg": "/UI/Icon/Attribute/UI_IconAttribute_Empty.png",
    "subcategoryName": {
      "ja_JP": "？？？",
      "en_US": "???"
    },
    "entryTypes": [
      "Skill"
    ]
  },
  {
    "skill_id": 106252,
    "created_at": "2023-07-12 01:14:14",
    "updated_at": "2023-07-12 01:14:14",
    "skill_name": 2056,
    "skill_desc_array": [
      {
        "desc": 557
      }
    ],
    "class_type": 6,
    "class_level": 50,
    "skill_type": 11,
    "ability_type": 2,
    "skill_mastery_param": [
      {
        "level": 1,
        "condition_class_level": 35
      }
    ],
    "condition_skill_id_1": 625,
    "condition_skill_level_1": 3,
    "condition_skill_id_2": 0,
    "condition_skill_level_2": 0,
    "cannot_learn_skill_id": 0,
    "switch_skill_id": 106251,
    "is_default_skill": false,
    "is_sub_skill": false,
    "id": "106252",
    "name": {
      "ja_JP": "-",
      "en_US": "-"
    },
    "desc": {
      "ja_JP": "Dummy",
      "en_US": "Dummy"
    },
    "thumb": "/UI/Icon/Class/UI_IconClass_Nodata.png",
    "classImg": "/UI/Icon/Class/UI_IconClass_06.png",
    "abilities": [],
    "skillBackgroundImg": "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_Empty.png",
    "elementImg": "/UI/Icon/Attribute/UI_IconAttribute_Empty.png",
    "subcategoryName": {
      "ja_JP": "？？？",
      "en_US": "???"
    },
    "entryTypes": [
      "Skill"
    ]
  },
  {
    "skill_id": 106406,
    "created_at": "2023-07-12 01:14:14",
    "updated_at": "2023-07-12 01:14:14",
    "skill_name": 76,
    "skill_desc_array": [
      {
        "desc": 1198
      },
      {
        "desc": 1199
      },
      {
        "desc": 1200
      }
    ],
    "class_type": 6,
    "class_level": 0,
    "skill_type": 9,
    "ability_type": 0,
    "skill_mastery_param": [
      {
        "level": 1,
        "condition_class_level": 11
      },
      {
        "level": 2,
        "condition_class_level": 23
      },
      {
        "level": 3,
        "condition_class_level": 35
      }
    ],
    "condition_skill_id_1": 0,
    "condition_skill_level_1": 0,
    "condition_skill_id_2": 0,
    "condition_skill_level_2": 0,
    "cannot_learn_skill_id": 0,
    "switch_skill_id": 0,
    "is_default_skill": true,
    "is_sub_skill": false,
    "id": "106406",
    "name": {
      "ja_JP": "ＨＰアップ",
      "en_US": "HP Up"
    },
    "desc": {
      "ja_JP": "G1：HPの最大値が増加する\nG2：HP最大値増加\nG3：HP最大値増加",
      "en_US": "G1: Increases Max HP.\r\nG2: Increases Max HP more.\r\nG3: Increases Max HP even more."
    },
    "thumb": "/UI/Icon/PlayerAbility/Base/Class6/UI_PlayerAbilityB_106406.png",
    "classImg": "/UI/Icon/Class/UI_IconClass_06.png",
    "abilities": [],
    "skillBackgroundImg": "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_Empty.png",
    "elementImg": "/UI/Icon/Attribute/UI_IconAttribute_Empty.png",
    "subcategoryName": {
      "ja_JP": "ベースアビリティ",
      "en_US": "Base Ability"
    },
    "entryTypes": [
      "Skill"
    ]
  },
  {
    "skill_id": 106407,
    "created_at": "2023-07-12 01:14:14",
    "updated_at": "2023-07-12 01:14:14",
    "skill_name": 77,
    "skill_desc_array": [
      {
        "desc": 1201
      },
      {
        "desc": 1202
      },
      {
        "desc": 1203
      }
    ],
    "class_type": 6,
    "class_level": 0,
    "skill_type": 9,
    "ability_type": 0,
    "skill_mastery_param": [
      {
        "level": 1,
        "condition_class_level": 13
      },
      {
        "level": 2,
        "condition_class_level": 25
      },
      {
        "level": 3,
        "condition_class_level": 37
      }
    ],
    "condition_skill_id_1": 0,
    "condition_skill_level_1": 0,
    "condition_skill_id_2": 0,
    "condition_skill_level_2": 0,
    "cannot_learn_skill_id": 0,
    "switch_skill_id": 0,
    "is_default_skill": true,
    "is_sub_skill": false,
    "id": "106407",
    "name": {
      "ja_JP": "攻撃力アップ",
      "en_US": "Attack Up"
    },
    "desc": {
      "ja_JP": "G1：攻撃力が増加する\nG2：攻撃力増加\nG3：攻撃力増加",
      "en_US": "G1: Increases Attack.\r\nG2: Increases Attack more.\r\nG3: Increases Attack even more."
    },
    "thumb": "/UI/Icon/PlayerAbility/Base/Class6/UI_PlayerAbilityB_106407.png",
    "classImg": "/UI/Icon/Class/UI_IconClass_06.png",
    "abilities": [],
    "skillBackgroundImg": "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_Empty.png",
    "elementImg": "/UI/Icon/Attribute/UI_IconAttribute_Empty.png",
    "subcategoryName": {
      "ja_JP": "ベースアビリティ",
      "en_US": "Base Ability"
    },
    "entryTypes": [
      "Skill"
    ]
  },
  {
    "skill_id": 106408,
    "created_at": "2023-07-12 01:14:14",
    "updated_at": "2023-07-12 01:14:14",
    "skill_name": 78,
    "skill_desc_array": [
      {
        "desc": 1204
      },
      {
        "desc": 1205
      },
      {
        "desc": 1206
      }
    ],
    "class_type": 6,
    "class_level": 0,
    "skill_type": 9,
    "ability_type": 0,
    "skill_mastery_param": [
      {
        "level": 1,
        "condition_class_level": 15
      },
      {
        "level": 2,
        "condition_class_level": 27
      },
      {
        "level": 3,
        "condition_class_level": 39
      }
    ],
    "condition_skill_id_1": 0,
    "condition_skill_level_1": 0,
    "condition_skill_id_2": 0,
    "condition_skill_level_2": 0,
    "cannot_learn_skill_id": 0,
    "switch_skill_id": 0,
    "is_default_skill": true,
    "is_sub_skill": false,
    "id": "106408",
    "name": {
      "ja_JP": "防御力アップ",
      "en_US": "Defense Up"
    },
    "desc": {
      "ja_JP": "G1：防御力が増加する\nG2：防御力増加\nG3：防御力増加",
      "en_US": "G1: Increases Defense.\r\nG2: Increases Defense more.\r\nG3: Increases Defense even more."
    },
    "thumb": "/UI/Icon/PlayerAbility/Base/Class6/UI_PlayerAbilityB_106408.png",
    "classImg": "/UI/Icon/Class/UI_IconClass_06.png",
    "abilities": [],
    "skillBackgroundImg": "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_Empty.png",
    "elementImg": "/UI/Icon/Attribute/UI_IconAttribute_Empty.png",
    "subcategoryName": {
      "ja_JP": "ベースアビリティ",
      "en_US": "Base Ability"
    },
    "entryTypes": [
      "Skill"
    ]
  },
  {
    "skill_id": 106409,
    "created_at": "2023-07-12 01:14:14",
    "updated_at": "2023-07-12 01:14:14",
    "skill_name": 79,
    "skill_desc_array": [
      {
        "desc": 1207
      },
      {
        "desc": 1208
      },
      {
        "desc": 1209
      }
    ],
    "class_type": 6,
    "class_level": 0,
    "skill_type": 9,
    "ability_type": 0,
    "skill_mastery_param": [
      {
        "level": 1,
        "condition_class_level": 17
      },
      {
        "level": 2,
        "condition_class_level": 29
      },
      {
        "level": 3,
        "condition_class_level": 41
      }
    ],
    "condition_skill_id_1": 0,
    "condition_skill_level_1": 0,
    "condition_skill_id_2": 0,
    "condition_skill_level_2": 0,
    "cannot_learn_skill_id": 0,
    "switch_skill_id": 0,
    "is_default_skill": true,
    "is_sub_skill": false,
    "id": "106409",
    "name": {
      "ja_JP": "回復力アップ",
      "en_US": "Recovery Up"
    },
    "desc": {
      "ja_JP": "G1：回復力が増加する\nG2：回復力増加\nG3：回復力増加",
      "en_US": "G1: Increases Recovery.\r\nG2: Increases Recovery more.\r\nG3: Increases Recovery even more."
    },
    "thumb": "/UI/Icon/PlayerAbility/Base/Class6/UI_PlayerAbilityB_106409.png",
    "classImg": "/UI/Icon/Class/UI_IconClass_06.png",
    "abilities": [],
    "skillBackgroundImg": "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_Empty.png",
    "elementImg": "/UI/Icon/Attribute/UI_IconAttribute_Empty.png",
    "subcategoryName": {
      "ja_JP": "ベースアビリティ",
      "en_US": "Base Ability"
    },
    "entryTypes": [
      "Skill"
    ]
  },
  {
    "skill_id": 106410,
    "created_at": "2023-07-12 01:14:14",
    "updated_at": "2023-07-12 01:14:14",
    "skill_name": 80,
    "skill_desc_array": [
      {
        "desc": 1210
      },
      {
        "desc": 1211
      },
      {
        "desc": 1212
      }
    ],
    "class_type": 6,
    "class_level": 0,
    "skill_type": 9,
    "ability_type": 0,
    "skill_mastery_param": [
      {
        "level": 1,
        "condition_class_level": 19
      },
      {
        "level": 2,
        "condition_class_level": 31
      },
      {
        "level": 3,
        "condition_class_level": 43
      }
    ],
    "condition_skill_id_1": 0,
    "condition_skill_level_1": 0,
    "condition_skill_id_2": 0,
    "condition_skill_level_2": 0,
    "cannot_learn_skill_id": 0,
    "switch_skill_id": 0,
    "is_default_skill": true,
    "is_sub_skill": false,
    "id": "106410",
    "name": {
      "ja_JP": "会心率アップ",
      "en_US": "Critical Rate Up"
    },
    "desc": {
      "ja_JP": "G1：会心率が増加する\nG2：会心率増加\nG3：会心率増加",
      "en_US": "G1: Increases Critical Rate.\r\nG2: Increases critical rate more.\r\nG3: Increases Critical Rate even more."
    },
    "thumb": "/UI/Icon/PlayerAbility/Base/Class6/UI_PlayerAbilityB_106410.png",
    "classImg": "/UI/Icon/Class/UI_IconClass_06.png",
    "abilities": [],
    "skillBackgroundImg": "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_Empty.png",
    "elementImg": "/UI/Icon/Attribute/UI_IconAttribute_Empty.png",
    "subcategoryName": {
      "ja_JP": "ベースアビリティ",
      "en_US": "Base Ability"
    },
    "entryTypes": [
      "Skill"
    ]
  },
  {
    "skill_id": 106507,
    "created_at": "2023-07-12 01:14:14",
    "updated_at": "2023-07-12 01:14:14",
    "skill_name": 87,
    "skill_desc_array": [
      {
        "desc": 1826
      },
      {
        "desc": 1827
      },
      {
        "desc": 1828
      }
    ],
    "class_type": 6,
    "class_level": 0,
    "skill_type": 8,
    "ability_type": 100,
    "skill_mastery_param": [
      {
        "level": 1,
        "condition_class_level": 20
      },
      {
        "level": 2,
        "condition_class_level": 32
      },
      {
        "level": 3,
        "condition_class_level": 44
      }
    ],
    "condition_skill_id_1": 0,
    "condition_skill_level_1": 0,
    "condition_skill_id_2": 0,
    "condition_skill_level_2": 0,
    "cannot_learn_skill_id": 0,
    "switch_skill_id": 0,
    "is_default_skill": true,
    "is_sub_skill": false,
    "id": "106507",
    "name": {
      "ja_JP": "アイテムヒーラー",
      "en_US": "Item Doctor"
    },
    "desc": {
      "ja_JP": "G1：回復アイテム使用時のインターバルが短縮する\nG2：インターバル短縮\nG3：インターバル短縮",
      "en_US": "G1: Shortens recovery item cooldown.\r\nG2: Shortens recovery item cooldown more.\r\nG3: Shortens recovery item cooldown even more."
    },
    "thumb": "/UI/Icon/PlayerAbility/Class/Class6/UI_PlayerAbilityC_106507.png",
    "classImg": "/UI/Icon/Class/UI_IconClass_06.png",
    "abilities": [],
    "skillBackgroundImg": "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_Empty.png",
    "elementImg": "/UI/Icon/Attribute/UI_IconAttribute_Empty.png",
    "subcategoryName": {
      "ja_JP": "クラス共有アビリティ",
      "en_US": "Class-shared Ability"
    },
    "entryTypes": [
      "Skill"
    ]
  },
  {
    "skill_id": 106522,
    "created_at": "2023-07-12 01:14:14",
    "updated_at": "2023-07-12 01:14:14",
    "skill_name": 1715,
    "skill_desc_array": [
      {
        "desc": 1723
      },
      {
        "desc": 1724
      },
      {
        "desc": 1725
      }
    ],
    "class_type": 6,
    "class_level": 0,
    "skill_type": 8,
    "ability_type": 0,
    "skill_mastery_param": [
      {
        "level": 1,
        "condition_class_level": 14
      },
      {
        "level": 2,
        "condition_class_level": 26
      },
      {
        "level": 3,
        "condition_class_level": 38
      }
    ],
    "condition_skill_id_1": 0,
    "condition_skill_level_1": 0,
    "condition_skill_id_2": 0,
    "condition_skill_level_2": 0,
    "cannot_learn_skill_id": 0,
    "switch_skill_id": 0,
    "is_default_skill": true,
    "is_sub_skill": false,
    "id": "106522",
    "name": {
      "ja_JP": "アボイダンス",
      "en_US": "Quick-footed"
    },
    "desc": {
      "ja_JP": "G1：自身がエネミーから狙われている時、自身の移動速度がアップする\nG2：移動速度上昇\nG3：移動速度上昇",
      "en_US": "G1: Applies a speed boost when enemies are targeting you.\r\nG2: Increases speed boost.\r\nG3: Increases speed boost even more."
    },
    "thumb": "/UI/Icon/PlayerAbility/Class/Class6/UI_PlayerAbilityC_106522.png",
    "classImg": "/UI/Icon/Class/UI_IconClass_06.png",
    "abilities": [],
    "skillBackgroundImg": "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_Empty.png",
    "elementImg": "/UI/Icon/Attribute/UI_IconAttribute_Empty.png",
    "subcategoryName": {
      "ja_JP": "クラス限定アビリティ",
      "en_US": "Class-specific Ability"
    },
    "entryTypes": [
      "Skill"
    ]
  },
  {
    "skill_id": 106523,
    "created_at": "2023-07-12 01:14:14",
    "updated_at": "2023-07-12 01:14:14",
    "skill_name": 1771,
    "skill_desc_array": [
      {
        "desc": 1803
      },
      {
        "desc": 1804
      },
      {
        "desc": 1805
      }
    ],
    "class_type": 6,
    "class_level": 0,
    "skill_type": 8,
    "ability_type": 0,
    "skill_mastery_param": [
      {
        "level": 1,
        "condition_class_level": 18
      },
      {
        "level": 2,
        "condition_class_level": 30
      },
      {
        "level": 3,
        "condition_class_level": 42
      }
    ],
    "condition_skill_id_1": 0,
    "condition_skill_level_1": 0,
    "condition_skill_id_2": 0,
    "condition_skill_level_2": 0,
    "cannot_learn_skill_id": 0,
    "switch_skill_id": 0,
    "is_default_skill": true,
    "is_sub_skill": false,
    "id": "106523",
    "name": {
      "ja_JP": "アディショナルキュア",
      "en_US": "Recovery Plus"
    },
    "desc": {
      "ja_JP": "G1：キュアアロー発動時、自身のHPを小回復する\nG2：回復量増加\nG3：回復量増加",
      "en_US": "G1: Restores a minor amount of HP to yourself when using Curative Field.\r\nG2: Increases amount of HP restored.\r\nG3: Increases amount of HP restored even more."
    },
    "thumb": "/UI/Icon/PlayerAbility/Class/Class6/UI_PlayerAbilityC_106523.png",
    "classImg": "/UI/Icon/Class/UI_IconClass_06.png",
    "abilities": [],
    "skillBackgroundImg": "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_Empty.png",
    "elementImg": "/UI/Icon/Attribute/UI_IconAttribute_Empty.png",
    "subcategoryName": {
      "ja_JP": "クラス限定アビリティ",
      "en_US": "Class-specific Ability"
    },
    "entryTypes": [
      "Skill"
    ]
  },
  {
    "skill_id": 106603,
    "created_at": "2023-07-12 01:14:14",
    "updated_at": "2023-07-12 01:14:14",
    "skill_name": 104,
    "skill_desc_array": [
      {
        "desc": 1243
      },
      {
        "desc": 1244
      },
      {
        "desc": 1245
      }
    ],
    "class_type": 6,
    "class_level": 0,
    "skill_type": 8,
    "ability_type": 0,
    "skill_mastery_param": [
      {
        "level": 1,
        "condition_class_level": 12
      },
      {
        "level": 2,
        "condition_class_level": 24
      },
      {
        "level": 3,
        "condition_class_level": 36
      }
    ],
    "condition_skill_id_1": 0,
    "condition_skill_level_1": 0,
    "condition_skill_id_2": 0,
    "condition_skill_level_2": 0,
    "cannot_learn_skill_id": 0,
    "switch_skill_id": 0,
    "is_default_skill": true,
    "is_sub_skill": false,
    "id": "106603",
    "name": {
      "ja_JP": "フォローアップ",
      "en_US": "Strike True"
    },
    "desc": {
      "ja_JP": "G1：ウィークアタックの与ダメージが増加する\nG2：与ダメージ増加\nG3：与ダメージ増加",
      "en_US": "G1: Increases damage output on weak attacks.\r\nG2: Increases damage output more.\r\nG3: Increases damage output even more."
    },
    "thumb": "/UI/Icon/PlayerAbility/Class/Class6/UI_PlayerAbilityC_106603.png",
    "classImg": "/UI/Icon/Class/UI_IconClass_06.png",
    "abilities": [],
    "skillBackgroundImg": "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_Empty.png",
    "elementImg": "/UI/Icon/Attribute/UI_IconAttribute_Empty.png",
    "subcategoryName": {
      "ja_JP": "クラス限定アビリティ",
      "en_US": "Class-specific Ability"
    },
    "entryTypes": [
      "Skill"
    ]
  },
    ]
    // .sort((a, b) => a.skill_type - b.skill_type)
    .sort((a, b) => a.skill_mastery_param[0]?.condition_class_level - b.skill_mastery_param[0]?.condition_class_level);
</script>

<MetaTags
    title={`${data.meta.title} Skills — Bapharia`}
    description={`All ${data.meta.title} skills in BLUE PROTOCOL.`}
/>

<div id="skills" class="grid">
    <h2>Base Actions</h2>
    <ol class="unstyled-list grid" role="list">
        {#each skills.filter(skill => skill.skill_type === 0 || skill.skill_type === 1) as skill}
            <Skill {skill} />
        {/each}
    </ol>
    <h2>Tactical Skills</h2>
    <ol class="unstyled-list grid" role="list">
        {#each skills.filter(skill => skill.skill_type >= 2 && skill.skill_type <= 5) as skill}
            <Skill {skill} />
        {/each}
    </ol>
    <h2>Ultimate Skills</h2>
    <ol class="unstyled-list grid" role="list">
        {#each skills.filter(skill => skill.skill_type === 6) as skill}
            <Skill {skill} />
        {/each}
    </ol>
    <h2>Class-Specific Abilities</h2>
    <ol class="unstyled-list grid" role="list">
        {#each skills.filter(skill => skill.skill_type === 8 && skill.ability_type !== 100) as skill}
            <Skill {skill} />
        {/each}
    </ol>
    <h2>Class-Shared Abilities</h2>
    <ol class="unstyled-list grid" role="list">
        {#each skills.filter(skill => skill.skill_type === 8 && skill.ability_type === 100) as skill}
            <Skill {skill} />
        {/each}
    </ol>
    <h2>Base Abilities</h2>
    <ol class="unstyled-list grid" role="list">
        {#each skills.filter(skill => skill.skill_type === 9) as skill}
            <Skill {skill} />
        {/each}
    </ol>
</div>

<style lang="scss">
    ol {
        gap: 5rem;
    }
</style>
