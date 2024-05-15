<!-- Damage output "102%" vs Damage change "+2%" -->
<table>
    <thead>
        <tr>
            <th><span class="visually-hidden">Weapon/Skill Element</span></th>
            <th><small>Weapon</small> Weakness Element</th>
            <th><small>Weapon</small> Neutral Element<sup>1, 2</sup></th>
            <th><small>Weapon</small> Resistant Element</th>
            <th><small>Weapon</small> Resistant Element <i>(Elemental enemy)</i></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th><small>Skill</small> Weakness Element</th>
            <td class="best">120%</td>
            <td class="high">114%</td>
            <td class="high">108%</td>
            <td class="high">102%</td>
        </tr>
        <tr>
            <th><small>Skill</small> Non-elemental</th>
            <td class="best">120%</td>
            <td class="med">100%</td>
            <td class="low">80%</td>
            <td class="worst">60%</td>
        </tr>
        <tr>
            <th><small>Skill</small> Neutral Element<sup>1</sup></th>
            <td class="high">106%</td>
            <td class="med">100%</td>
            <td class="low">94%</td>
            <td class="low">88%</td>
        </tr>
        <tr>
            <th><small>Skill</small> Resistant Element</th>
            <td class="low">92%</td>
            <td class="low">86%</td>
            <td class="low">80%</td>
            <td>-</td>
        </tr>
        <tr>
            <th><small>Skill</small> Resistant Element <i>(Elemental enemy)</i></th>
            <td class="low">78%</td>
            <td class="low">72%</td>
            <td>-</td>
            <td class="worst" style="border-bottom-right-radius: 1rem;">60%</td>
        </tr>
    </tbody>
    <caption style="text-align: left; color: var(--accent1)">
        1. Neutral Element refers to elements that the target neither has weakness nor resistance to.<br>
        2. In the case of weapons, Neutral Element also includes Non-elemental weapons.
    </caption>
</table>

<style lang="scss">
    table {
        table-layout: fixed;
    }

    small {
        display: block;
    }

    i {
        font-style: normal;
        font-size: var(--step--1);
        color: var(--text2);
    }

    th {
        font-weight: normal;
        // background: var(--surface2);
    }

    tbody small {
        color: purple;
    }

    // .best {
    //     background: rgba(0, 110, 255, 0.1);
    // }

    // .high {
    //     background: rgba(0, 180, 45, 0.1);
    // }

    .best, .high, .med {
        background: rgba(0, 180, 45, 0.03);
        color: green;
    }

    .med {
        // background: var(--surface2);
    }

    .low, .worst {
        // background: rgba(255, 145, 0, 0.1);
        background: rgba(255, 0, 0, 0.03);
        color: red;
    }
</style>