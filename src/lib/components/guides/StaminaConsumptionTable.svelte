<table>
    <thead>
        <tr>
            <th>Action</th>
            <th colspan="2">Stamina Consumption</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Sprinting <i>(while being targeted)</i></th>
            <td colspan="2">20 / second</td>
        </tr>
        <tr>
            <th>Jumping <i>(while being targeted)</i></th>
            <td colspan="2">20</td>
        </tr>
        <tr>
            <th>Skills <i>(while being targeted)</i></th>
            <td colspan="2">Varies per skill</td>
        </tr>
        <tr class="section-divider">
            <th></th>
            <th>
                <div class="flex g-25">
                    <img
                        src="/UI/Icon/Class/UI_IconClass_07.png"
                        alt="Twin Striker"
                        width="32"
                        height="32"
                    />
                    <img
                        src="/UI/Icon/Class/UI_IconClass_11.png"
                        alt="Spell Caster"
                        width="32"
                        height="32"
                    />
                    <img
                        src="/UI/Icon/Class/UI_IconClass_20.png"
                        alt="Blitz Lancer"
                        width="32"
                        height="32"
                    />
                </div>
            </th>
            <th>
                <div class="flex g-25">
                    <img
                        src="/UI/Icon/Class/UI_IconClass_06.png"
                        alt="Blast Archer"
                        width="32"
                        height="32"
                    />

                    <img
                        src="/UI/Icon/Class/UI_IconClass_12.png"
                        alt="Aegis Fighter"
                        width="32"
                        height="32"
                    />
                    <img
                        src="/UI/Icon/Class/UI_IconClass_19.png"
                        alt="Heavy Smasher"
                        width="32"
                        height="32"
                    />
                </div>
            </th>
        </tr>
        <tr>
            <th>Dodging</th>
            <td>15</td>
            <td>20</td>
        </tr>
        <tr>
            <th>Springboard Jump</th>
            <td>20</td>
            <td>30</td>
        </tr>
    </tbody>
</table>

<style lang="scss">
    thead th {
        background: var(--surface3);

        &:first-of-type {
            border-top-left-radius: 9px;
        }

        &:last-of-type {
            border-top-right-radius: 9px;
        }
    }

    tbody {
        th {
            font-weight: bold;
            color: var(--accent);
        }

        i {
            color: var(--text2);
            font-size: var(--step--1);
            font-weight: normal;
            font-style: normal;
        }
    }

    .section-divider {
        font-weight: bold;
        background: var(--surface2);

        .flex {
            margin: -0.5rem 0 !important;
        }

        th {
            color: var(--text2);
        }
    }
</style>
