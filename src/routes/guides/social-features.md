---
title: 'Social Features'
author: "Zakum"
date: '2023-5-26'
category: 'Game Systems'
caption: 'Nice-to-have features that are not directly part of the main gameplay loop.'
bannerImg: "/guides/social-features/banner.webp"
thumbImg: "/guides/social-features/thumb.webp"
---

<script>
    import Video from '$lib/components/Video.svelte';
    import StickyNote from '$lib/components/StickyNote.svelte';
</script>

## Life Skills
### Housing
Housing was confirmed as a planned feature in the CBT Feedback Report. It will be added after the official release. Trading may be implemented *only* for housing materials.

### Fishing
Fishing is a mini-game that can be performed at designated locations with other players or by yourself. Once a fish has bitten onto the hook, a gauge will appear at the bottom indicating line tension and fish's distance. Reel the fish in by carefully adjusting your fishing rod--good positioning will result in lower line tension. High line tension will break the line. Once successfully caught, your character will hold the fish with its length displayed.

<Video 
    title="Camps, as shown in an official livestream" 
    id="sH2B1ncdEWM?start=1361"
    bleed
/>

Caught fish can be sold, and more incentives will be introduced in the future to make it more life skill-like.

## Player Interaction
### Gestures
Below is a list of gestures and interactions you can perform by yourself, with other players, or with NPCs.
- Hand Holding
- Rock, Paper, Scissors
- Gestures (emotes)
- Petting animals
- Misc consumables (such as firecrackers)

<figure class="full-bleed">
    <img src="/guides/social-features/rps.jpg" alt="Rock, paper, scissors demo">
    <figcaption>Rock, Paper, Scissors duel beginning. Who says there's no PvP?</figcaption>
</figure>

### Talk Mode
The basic chat feature of the game. You can send stamps in chat, use gestures, change text size, switch chat tabs, and select chat targets that you want your messages to be visible to. 
<StickyNote type="note">
    Only premade parties can chat while in a dungeon. This is to avoid abusive behavior towards other players while in a party formed via matchmaking.
</StickyNote>

There are also settings in the Command Menu to configure automatic messages. These messages allow you to automatically send text into configured chat channels upon certain triggers, such as getting downed, when you use your ultimate skill, when an enemy has reached elemental burst, when your HP is low, and more. You can set fixed messages or send stamps with auto messages.

### Shortcut Ring
The shortcut ring is similar to communication wheels in FPS games. It allows for quick communication without entering Talk Mode, and can be used to communicate with players in dungeons entered with a random matchmade party. You can assign fixed messages, emotes, consumables, and stamps to the 8 slots and even use them with shortcut keys without opening the ring. You can have up to 3 shortcut ring loadouts.

![Shortcut Ring](/guides/social-features/shortcutring.webp)

### Teams
Teams are akin to guilds in other online games. Read more about them in the [teams guide](/guides/teams).

### Zone Population Limits
The Japanese service will have all players on the same server. Zones are regions that can be traversed without facing loading screens. Each zone has maximum population limits before placing players in a new channel. 

| Setting | Max players  |
|---------|--------------|
| Town    | 200          |
| Field   | 30           |
| Dungeon | 6            |
| Raid    | 30           |

<StickyNote type="tip">
    While you cannot manually change channels, parties will be prioritized so that party members can play together on the same channel.
</StickyNote>

### Adventurer Cards
Adventurer Cards are shown on your character profile and can be customized to have a profile picture, status message, banner image, and a few featured photos. It will display information about your character such as your class levels, name, title, ID, and a few other things. There is also a like button for players to like your profile card!

<img src="/guides/social-features/playercard.webp" alt="Example adventurer card">

<StickyNote type="tip">
    Player names do not have to be unique—there can be multiple Kiritos. IDs are the unique identifier used in game.
</StickyNote>

### Leaderboards
Rankings exist for some content such as Time Attack and Score Attack dungeons. Leaderboards can be viewed in cities.

## Other Features
### Photo Mode
Photo mode grants you a variety of controls for taking screenshots in the game. You can change angles and zoom, apply bokeh, pause emote animations, and even use skills during the photo (skills will still go on cooldown and cannot be paused). 

<figure class="full-bleed">
    <Video 
        title="Photo Mode" 
        id="CyZMoirhGzU?start=12238"
        bleed
        style="margin: 0"
    />
    <figcaption>Basic demonstration of Photo Mode and setting Adventurer Card pictures.</figcaption>
</figure>
 
You can also time-stop the location of players related to you (friends, party members, team members), so even if they leave the area they will appear to have not moved on your screen while you're still in photo mode!

### Camps
Some zones contain camps, and players can light the campfire and sit by it to recover health faster than usual. Camps are intended to act as a small hub for players to meet others who may be working on similar content. As such, some camps can be found outside and inside of Free Exploration dungeons. 

Camps may also have training dummies near them for players to test their damage. 

<Video 
    title="Camps, as shown in an official livestream" 
    id="sH2B1ncdEWM?start=1864"
    bleed
/>