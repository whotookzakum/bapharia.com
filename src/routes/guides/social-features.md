---
title: 'Social Features'
author: "Zakum"
date: '2022-12-18'
category: 'Game Systems'
caption: 'Features that are not directly part of the main gameplay loop.'
featuredImg: 'op.png'
---

<script>
    import StickyNote from '$lib/components/StickyNote.svelte';
</script>

<style>
    table {
        grid-column: 2;
    }
</style>

## Player Interactions
Below is a list of interactions you can perform by yourself, with other players, or with NPCs.
- Hand Holding
- Rock, Paper, Scissors
- Gestures (emotes)
- Petting animals
- Misc consumables (such as firecrackers)

<figure class="full-bleed">
    <img src="/images/39.jpg" alt="Rock, paper, scissors demo">
    <figcaption>Rock, Paper Scissors duel beginning. Who says there's no PvP?</figcaption>
</figure>

### Talk Mode
The basic chat feature of the game. You can send stamps in chat, use gestures, change text size, switch chat tabs, and select chat targets that you want your messages to be visible to. 
<StickyNote type="note">
    Only premade parties can chat while in a dungeon. This is to avoid abusive behavior towards other players while in a party formed via matchmaking.
</StickyNote>

### Shortcut Ring
The shortcut ring is similar to communication wheels in overwatch and battle royales. It allows for quick communication without entering Talk Mode, and can be used to communicate with players in dungeons entered with a random matchmade party. You can assign fixed messages, emotes, consumables, and stamps to the 8 slots and even use them with shortcut keys without opening the ring. You can have up to 3 separate shortcut rings.

### Teams
Teams are akin to guilds in other online games. To *create* a team you must progress a bit in the game, however there is no level restriction for receiving invites to a team. You can only be a member of one team at a time.

Teams have ranks (levels) that can be raised by filling the EXP meter through regular actions such as gathering resources and defeating enemies. 

| Team Rank | Max members  |
|-----------|--------------|
| 1         | 20           |
| 2         | 25           |
| 3         | 30           |
| 4         | 35           |
| 5         | 40           |
| 6         | 45           |
| 7         | 50           |

There is a team chat channel where you can talk with other members of your team. At the time of release, there will be no content that is exclusive to being in a team, however this is being considered for future updates. 

If team leaders do not log in for a long time, privileges will be passed to other members. There are some cooldowns on things like guild disbandment, expulsions, and leaving the guild (details unknown).

### Zone Population Limits
The Japanese service will have all players on the same server. Zones are regions that can be traversed without facing loading screens. Each zone has maximum population limits before placing players in a new channel. 

| Setting | Max players  |
|---------|--------------|
| Town    | 200          |
| Field   | 30           |
| Dungeon | 6            |
| Raid    | 30           |
<StickyNote type="tip">
    While you can not manually change channels, parties will be prioritized so that party members can play together on the same channel.
</StickyNote>

### Adventurer Cards
Adventurer Cards are shown on your character profile and can be customized to have a profile picture, status message, banner image, and a few featured photos. It will display information about your character such as current class and class level, name & title, ID, and a few other things. There is also a like button for players to like your profile card!

<StickyNote type="tip">
    Player names do not have to be unique—there can be multiple Kiritos. IDs are the unique identifier used in game.
</StickyNote>

## Other Features
### Photo Mode
Photo mode grants you a variety of controls for taking screenshots in the game. You can change angles and zoom, apply bokeh, pause emote animations, and even use skills during the photo (skills will still go on cooldown and cannot be paused). 

You can also time-stop the location of players related to you (friends, party members, team members), so even if they leave the area they will appear to have not moved on your screen while you're still in photo mode!

### Campfires
https://youtu.be/sH2B1ncdEWM?t=1864

## Life Skills
### Housing
Housing was confirmed as a planned feature in the CBT Feedback Report. It will be added after the official release. Trading may be implemented *only* for housing materials.

### Fishing
Fishing is a mini-game that can be performed at designated locations with other players or by yourself. Once a fish has bitten onto the hook, a gauge will appear at the bottom indicating line tension and fish's distance. Reel the fish in by carefully adjusting your fishing rod--good positioning will result in lower line tension. High line tension will break the line. Once successfully caught, your character will hold the fish with its length displayed.

Caught fish can be sold, and more incentives will be introduced in the future to make it more life skill-like.
