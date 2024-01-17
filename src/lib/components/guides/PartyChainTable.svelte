<script>
    // Data found in Blueprints/Manager/DT_CommonStatusAilmentDB.uasset (search for PartyChainBonus)

    // chain 50 = heal (10, 1) 9s
    // chain 150 = def(15) 10s
    // chain 250 = super armor 10s

    // chain 350 = heal (20, 1) 14s
    // chain 450 = def(30) 10s
    // chain 550 = super armor 15s

    // chain 650 = heal (20, 1) 9s
    // chain 750 = def(45) 10s
    // chain 850 = super armor 20s

    // chain 999 = RapidSkillCoolTime_ULT (300) 10s
</script>

<table>
    <thead>
        <tr>
            <th>Chain</th>
            <th>Damage</th>
            <th>Effect</th>
            <th>Effect (Raid)</th>
            <th>Reset Timer</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>0</th>
            <td>100%</td>
            <td>-</td>
            <td rowspan="5">-</td>
            <td rowspan="2">1.5s</td>
        </tr>
        <tr>
            <th>50</th>
            <td rowspan="2">101%</td>
            <td rowspan="2">
                <div class="flex g-50">
                    <img
                        src="/UI/Icon/StatusAilment/UI_StatusAilment_4007.png"
                        alt=""
                        width="26"
                        height="30"
                    />
                    <p>
                        <span>HP Regen</span>
                        <br />
                        Recover <strong>1%</strong> of Max HP per second for
                        <strong>10</strong> seconds.
                    </p>
                </div>
            </td>
        </tr>
        <tr>
            <th>100</th>
            <td rowspan="2">1.4s</td>
        </tr>
        <tr>
            <th>150</th>
            <td rowspan="2">102%</td>
            <td rowspan="2">
                <div class="flex g-50">
                    <img
                        src="/UI/Icon/StatusAilment/UI_StatusAilment_4003.png"
                        alt=""
                        width="26"
                        height="30"
                    />
                    <p>
                        <span>DEF Up</span>
                        <br />
                        Reduce received damage by <strong>15%</strong> for 10 seconds.
                    </p>
                </div>
            </td>
        </tr>
        <tr>
            <th>200</th>
            <td rowspan="2">1.3s</td>
        </tr>
        <tr>
            <th>250</th>
            <td rowspan="2">103%</td>
            <td rowspan="2">
                <div class="flex g-50">
                    <img
                        src="/UI/Icon/StatusAilment/UI_StatusAilment_4006.png"
                        alt=""
                        width="26"
                        height="30"
                    />
                    <p>
                        <span>SP Armor</span>
                        <br />
                        Become immune to stagger for <strong>10</strong> seconds.
                    </p>
                </div>
            </td>
            <td rowspan="6">
                <div class="flex g-50">
                    <img
                        src="/UI/Icon/StatusAilment/UI_StatusAilment_4007.png"
                        alt=""
                        width="26"
                        height="30"
                    />
                    <p>
                        <span>HP Regen</span>
                        <br />
                        Recover <strong>2%</strong> of Max HP per second for
                        <strong>15</strong> seconds.
                    </p>
                </div>
            </td>
        </tr>
        <tr>
            <th>300</th>
            <td rowspan="2">1.2s</td>
        </tr>
        <tr>
            <th>350</th>
            <td rowspan="2">104%</td>
            <td rowspan="2">
                <div class="flex g-50">
                    <img
                        src="/UI/Icon/StatusAilment/UI_StatusAilment_4007.png"
                        alt=""
                        width="26"
                        height="30"
                    />
                    <p>
                        <span>HP Regen</span>
                        <br />
                        Recover <strong>2%</strong> of Max HP per second for
                        <strong>15</strong> seconds.
                    </p>
                </div>
            </td>
        </tr>
        <tr>
            <th>400</th>
            <td rowspan="2">1.2s</td>
        </tr>
        <tr>
            <th>450</th>
            <td rowspan="2">105%</td>
            <td rowspan="2">
                <div class="flex g-50">
                    <img
                        src="/UI/Icon/StatusAilment/UI_StatusAilment_4003.png"
                        alt=""
                        width="26"
                        height="30"
                    />
                    <p>
                        <span>DEF Up</span>
                        <br />
                        Reduce received damage by <strong>30%</strong> for 10 seconds.
                    </p>
                </div>
            </td>
        </tr>
        <tr>
            <th>500</th>
            <td rowspan="2">1.0s</td>
        </tr>
        <tr>
            <th>550</th>
            <td rowspan="2">106%</td>
            <td rowspan="2">
                <div class="flex g-50">
                    <img
                        src="/UI/Icon/StatusAilment/UI_StatusAilment_4006.png"
                        alt=""
                        width="26"
                        height="30"
                    />
                    <p>
                        <span>SP Armor</span>
                        <br />
                        Become immune to stagger for <strong>15</strong> seconds.
                    </p>
                </div>
            </td>
            <td rowspan="6">
                <div class="flex g-50">
                    <img
                        src="/UI/Icon/StatusAilment/UI_StatusAilment_4003.png"
                        alt=""
                        width="26"
                        height="30"
                    />
                    <p>
                        <span>DEF Up</span>
                        <br />
                        Reduce received damage by <strong>30%</strong> for 10 seconds.
                    </p>
                </div>
            </td>
        </tr>
        <tr>
            <th>600</th>
            <td rowspan="2">0.8s</td>
        </tr>
        <tr>
            <th>650</th>
            <td rowspan="2">107%</td>
            <td rowspan="2">
                <div class="flex g-50">
                    <img
                        src="/UI/Icon/StatusAilment/UI_StatusAilment_4007.png"
                        alt=""
                        width="26"
                        height="30"
                    />
                    <p>
                        <span>HP Regen</span>
                        <br />
                        Recover <strong>2%</strong> of Max HP per second for
                        <strong>10</strong> seconds.
                    </p>
                </div>
            </td>
        </tr>
        <tr>
            <th>700</th>
            <td rowspan="2">0.6s</td>
        </tr>
        <tr>
            <th>750</th>
            <td rowspan="2">108%</td>
            <td rowspan="2">
                <div class="flex g-50">
                    <img
                        src="/UI/Icon/StatusAilment/UI_StatusAilment_4003.png"
                        alt=""
                        width="26"
                        height="30"
                    />
                    <p>
                        <span>DEF Up</span>
                        <br />
                        Reduce received damage by <strong>45%</strong> for 10 seconds.
                    </p>
                </div>
            </td>
        </tr>
        <tr>
            <th>800</th>
            <td rowspan="2">0.4s</td>
        </tr>
        <tr>
            <th>850</th>
            <td rowspan="2">109%</td>
            <td rowspan="3">
                <div class="flex g-50">
                    <img
                        src="/UI/Icon/StatusAilment/UI_StatusAilment_4006.png"
                        alt=""
                        width="26"
                        height="30"
                    />
                    <p>
                        <span>SP Armor</span>
                        <br />
                        Become immune to stagger for <strong>20</strong> seconds.
                    </p>
                </div>
            </td>
            <td rowspan="3">
                <div class="flex g-50">
                    <img
                        src="/UI/Icon/StatusAilment/UI_StatusAilment_4006.png"
                        alt=""
                        width="26"
                        height="30"
                    />
                    <p>
                        <span>SP Armor</span>
                        <br />
                        Become immune to stagger for <strong>15</strong> seconds.
                    </p>
                </div>
            </td>
        </tr>
        <tr class="remove-border">
            <th>900</th>
            <td rowspan="3">0.3s</td>
        </tr>
        <tr class="remove-border">
            <th>950</th>
            <td rowspan="2">110%</td>
        </tr>
        <tr class="remove-border">
            <th>999</th>
            <td colspan="2">ULT skills cooldowns will count down at 4x the normal speed for 10 seconds.</td>
        </tr>
    </tbody>
</table>

<style lang="scss">
    td,
    tbody th {
        border: 1px solid var(--surface3);
        padding: 0.75rem;
    }

    tr {
        :first-child {
            border-left: none;
        }

        :last-child {
            border-right: none;
        }
    }

    .remove-border * {
        border-bottom: none;
    }

    tbody th {
        font-weight: bold;
        color: var(--accent);
    }

    .flex {
        align-items: center;
    }

    p {
        font-size: inherit;
        line-height: 1.2;

        span {
            color: var(--text2);
            font-size: var(--step--1);
            text-transform: uppercase;
        }
    }
</style>
