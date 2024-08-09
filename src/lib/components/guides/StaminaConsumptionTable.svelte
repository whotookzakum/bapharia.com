<script>
    import IconMask from "$lib/components/IconMask.svelte";
    import Tooltip from "../FloatingUI/Tooltip.svelte";
    import { assetUrl } from "$lib/utils";
    import ClassIcon from "../ClassIcon.svelte";
</script>

<div class="surface1 p-4 rounded-2xl">
    <table>
        <thead style="font-size: var(--step-2)">
            <tr>
                <th>
                    <span class="visually-hidde">Action</span>
                </th>
                <th colspan="2">Stamina Consumption</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th />
                <th>
                    <div class="flex gap-1">
                        <ClassIcon
                            id={7}
                            style="background-color: var(--outline-color)"
                        />
                        <ClassIcon
                            id={11}
                            style="background-color: var(--outline-color)"
                        />
                        <ClassIcon
                            id={20}
                            style="background-color: var(--outline-color)"
                        />
                    </div>
                </th>
                <th>
                    <div class="flex gap-1">
                        <ClassIcon
                            id={6}
                            style="background-color: var(--outline-color)"
                        />
                        <ClassIcon
                            id={12}
                            style="background-color: var(--outline-color)"
                        />
                        <ClassIcon
                            id={19}
                            style="background-color: var(--outline-color)"
                        />
                        <ClassIcon
                            id={21}
                            style="background-color: var(--outline-color)"
                        />
                    </div>
                </th>
            </tr>
            <tr>
                <th>
                    <div class="flex items-center">
                        <span class="mr-2">Jumping</span>
                        <Tooltip
                            placement="top"
                            inline
                            tooltipStyle="width: max-content"
                        >
                            <IconMask
                                src="/UI/HateAlert/UI_HateAlertIcon1.webp"
                                width="40"
                                height="20"
                                style="background: var(--color-sensed)"
                            />
                            <svelte:fragment slot="tooltip"
                                >An enemy is watching you</svelte:fragment
                            >
                        </Tooltip>
                        <Tooltip
                            placement="top"
                            inline
                            tooltipStyle="width: max-content"
                        >
                            <IconMask
                                src="/UI/HateAlert/UI_HateAlertIcon1.webp"
                                width="40"
                                height="20"
                                style="background: var(--color-targeted)"
                            />
                            <svelte:fragment slot="tooltip"
                                >An enemy is targeting you</svelte:fragment
                            >
                        </Tooltip>
                    </div>
                </th>
                <td>20</td>
                <td>20</td>
            </tr>
            <tr>
                <th>
                    <div class="flex items-center">
                        <span class="mr-2">Sprinting</span>
                        <Tooltip
                            placement="top"
                            inline
                            tooltipStyle="width: max-content"
                        >
                            <IconMask
                                src="/UI/HateAlert/UI_HateAlertIcon1.webp"
                                width="40"
                                height="20"
                                style="background: var(--color-sensed)"
                            />
                            <svelte:fragment slot="tooltip"
                                >An enemy is watching you</svelte:fragment
                            >
                        </Tooltip>
                        <Tooltip
                            placement="top"
                            inline
                            tooltipStyle="width: max-content"
                        >
                            <IconMask
                                src="/UI/HateAlert/UI_HateAlertIcon1.webp"
                                width="40"
                                height="20"
                                style="background: var(--color-targeted)"
                            />
                            <svelte:fragment slot="tooltip"
                                >An enemy is targeting you</svelte:fragment
                            >
                        </Tooltip>
                    </div>
                </th>
                <td>20 per second</td>
                <td>20 per second</td>
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
            <tr>
                <th>Skills</th>
                <td>Varies per skill</td>
                <td>Varies per skill</td>
            </tr>
        </tbody>
    </table>
</div>

<style lang="scss">
    table {
        font-size: var(--step-1);
    }
</style>
