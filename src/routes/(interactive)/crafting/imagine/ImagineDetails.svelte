<script>
    import ItemDetails from "$lib/components/crafting/ItemDetails.svelte";
    import imagineParams from "../../graphql/japan/imagine_param_level.json";
    import imagineRecipes from "../../graphql/japan/imagine_recepi.json";
    export let imagine;

    const param_data = imagineParams.filter(
        (params) => params.pattern_id === imagine.param_type
    );

    const recipe = imagineRecipes.find(
        (recipe) => recipe.imagin_id === imagine.id
    );

    imagine = { ...imagine, param_data, recipe };
</script>

<ItemDetails item={imagine} />
