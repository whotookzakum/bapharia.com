<script>
    export let aboutTheGame,
        gameFeatures = false;
</script>

{#if aboutTheGame}
    <details>
        <summary> What is BLUE PROTOCOL? </summary>
        <p>
            BLUE PROTOCOL is an online action RPG for PC developed by Project
            Sky Blue, a project team under Bandai Namco Online and Bandai Namco
            Studios. Enter a world with stunning anime graphics and exciting
            multiplayer action in this brand new Japanese original title created
            in Unreal Engine 4.
        </p>
        <p>
            The game has been in development since 2014, when Soukichi Shimooka
            joined Bandai Namco. At the time it was popular to use colors in
            project codenames. When thinking of the game's setting, Shimooka
            pictured "<a
                href="https://www.4gamer.net/games/467/G046741/20190903096/"
                target="_blank"
                rel="noreferrer noopener nofollow"
                >blue skies casting away darkness</a
            >". Thus the project was nicknamed PROJECT SKY BLUE.
        </p>
        <p>
            The team behind BLUE PROTOCOL also worked on the Tales Series,
            Tekken, and Ace Combat.
        </p>
    </details>
    <details>
        <summary> What is the plot of BLUE PROTOCOL? </summary>
        <p>
            You awake with no memories, befriending a demihuman named Feste.
            While searching for clues on your missing memories, you encounter
            two humans who claim to have traveled back 1000 years through space
            and time, with the purpose of releasing mysterious entities called
            Avalitia in order to change the course of humanity for the better.
        </p>
        <p>
            You later hear that Avalitia are monsters from fairy tales, while
            the two time travelers give their own explanation to you. You then
            have to make the choice--whether to stand together or perish--and
            begin to uncover the truths of Avalitia and the world of Asteria
            while searching for your missing memories.
        </p>
    </details>
    <details>
        <summary> How will Blue Protocol be monetized? </summary>
        <p>
            Blue Protocol will be free to play, and the developers have stated
            that it won't be pay-to-win. They will monetize through cosmetics
            (accessories, hairstyles) and a Seasonal Pass system (like in battle
            royales). Paid items will provide convenience.
        </p>
    </details>
    <details>
        <summary>
            When will BLUE PROTOCOL release? What regions will it be available
            in? What platforms will be supported?
        </summary>
        <p>BLUE PROTOCOL has different publishers for different regions.</p>
        <table>
            <thead>
                <tr>
                    <th>Publisher</th>
                    <th>Regions</th>
                    <th>Platforms</th>
                    <th>Release Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Bandai Namco Online</td>
                    <td>Japan</td>
                    <td>
                        PC (Bandai Namco ID)<br />
                        PlayStation 5<br />
                        Xbox Series X|S
                    </td>
                    <td>Release planned Early Spring 2023, delayed.</td>
                </tr>
                <tr>
                    <td>Amazon Games</td>
                    <td
                        >North America, South America, Western Europe,
                        Australia, New Zealand</td
                    >
                    <td>
                        PC (Steam)<br />
                        PlayStation 5<br />
                        Xbox Series X|S
                    </td>
                    <td
                        >Closed Beta planned for first half of 2023. Release in
                        second half of 2023.</td
                    >
                </tr>
                <tr>
                    <td>Cayenne Entertainment Technology</td>
                    <td>Taiwan, Hong Kong, Macao</td>
                    <td> PC </td>
                    <td />
                </tr>
                <tr>
                    <td>Smilegate Megaport</td>
                    <td>South Korea</td>
                    <td> PC </td>
                    <td />
                </tr>
            </tbody>
        </table>
    </details>
    <details>
        <summary> Will the game support 4K/ultrawide resolution? </summary>
        <p>
            It was stated that at this time it will not officially support 4K
            resolution, but may be revisited in the future. This is to "preserve
            the art style".
        </p>
    </details>
    <details>
        <summary> What are the recommended specs to play the game? </summary>
        <p>
            The most up-to-date system requirements can be found on the <a
                href="https://blue-protocol.com/guide/system_requirements"
                target="_blank"
                rel="noreferrer noopener nofollow">official website</a
            >.
        </p>
        <p>
            Also check this <a
                href="https://blue-protocol.com/news/64"
                target="_blank"
                rel="noreferrer noopener nofollow">official news post</a
            > with details on the Benchmark Software. This software can be used to
            test the performance of the game on your PC with various settings. You
            can also create your character beforehand.
        </p>
    </details>
{/if}
{#if gameFeatures}
    <details>
        <summary> How many classes are there at the moment? </summary>
        <p>
            The game will release with 5 classes, with more being added after
            release. Existing classes will have their playability expanded as
            well. Check out the <a href="/classes">classes page</a>
            to learn more.
        </p>
    </details>
    <details>
        <summary>
            Will there be a trinity system? (Tank/Healer/Damage roles)
        </summary>
        <p>
            Yes. Although it seems the team originally did not want a trinity
            system, they stated after the CBT that they want to clearly
            distinguish the class roles. Additionally, certain classes have
            skills that make them much more suitable for specific role. There is
            some overlap as well, for example Twin Striker can heal itself and
            allies with a life-drain buff.
        </p>
    </details>
    <details>
        <summary> Is Blue Protocol open world? </summary>
        <p>
            It is not open world in the sense of seamless exploration with zero
            loading screens like Breath of the Wild or Tower of Fantasy.
            However, the zones are very large and can be maneuvered around
            relatively freely, so you can explore without much invisible
            barriers and won't be running into loading screens too often.
        </p>
    </details>
    <details>
        <summary> How many players can be in a zone? </summary>
        <table>
            <thead>
                <tr>
                    <th>Zone Type</th>
                    <th>Max players per channel</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Cities</td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>Fields</td>
                    <td>30</td>
                </tr>
                <tr>
                    <td>Missions (Dungeons)</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>Raids</td>
                    <td>30</td>
                </tr>
                <tr>
                    <td>Time Attack/Score Attack</td>
                    <td>1</td>
                </tr>
            </tbody>
        </table>
    </details>
    <details>
        <summary> Will there be PvP? </summary>
        <p>
            PvP is currently not under development, and its implementation is
            highly unlikely. The developers want to focus on Story and PvE
            first. They also want all features in the game to connect to core
            gameplay/benefit your character, but they do not want to force
            casual players to PvP in order to get benefits.
        </p>
        <p>
            A (player) Party vs (enemy) Party system exists in the Arena--you
            can compete in the rankings for speed clears.
        </p>
    </details>
    <details>
        <summary> How do cosmetics interact with armor? </summary>
        <p>
            Equipment that provide stats, besides your weapon, do not alter your
            appearance. Cosmetic items do not provide stats. As a result, you
            can dress the way you want while equipping the items that you want.
        </p>
    </details>
    <details>
        <summary> What are Imajinn/Imagine/Echoes? </summary>
        <p>
            Imagine (Echoes) are creatures that aid you in your journey. There
            are three types:
        </p>
        <ol>
            <li>Battle Imagine that help you in combat</li>
            <li>Enhance Imagine that provide passive stats</li>
            <li>Mount Imagine that are rideable mounts</li>
        </ol>
        <p>
            Read more about Imagine in the <a href="/guides/imagine">guide</a>.
        </p>
    </details>
    <details>
        <summary> What social features are there? </summary>
        <p>
            <strong>Fishing</strong> is currently implemented at a basic level
            (fish can be sold for Luno) and will be expanded upon in the future.
            <strong>Housing</strong>
            is planned to be added in an update after official release.
            <strong>Marriage</strong> is currently unknown.
        </p>
        <p>
            Smaller features include an extensive Photo Mode, customizable
            character profiles, and multiplayer emotes such as hand-holding and
            rock-paper-scissors. Check the guide on <a
                href="/guides/social-features">social features</a
            > for more.
        </p>
        <p>
            <strong>There is no trading system in BLUE PROTOCOL</strong>, and it
            is highly unlikely to be implemented in order to prevent real-money
            transactions. It's been stated that trading may be possible for
            <strong>housing items only</strong>.
        </p>
    </details>
{/if}

<style lang="scss">
    summary {
        max-inline-size: none;

        &:hover {
            color: var(--accent);
        }
    }

    table {
        line-height: 1.7 !important;
        table-layout: fixed;
    }
    td {
        padding: 0.5rem 0.5rem !important;
    }

    details[open] summary {
        color: var(--accent);
    }
</style>
