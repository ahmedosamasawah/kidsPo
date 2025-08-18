<div class="min-h-[100svh]">
    {#if loading}
        <div class="flex min-h-[100svh] items-center justify-center">
            <Spinner size="xl" text="جاري تحميل العائلة..." />
        </div>
    {:else if error}
        <div class="flex min-h-[100svh] items-center justify-center">
            <div class="text-center">
                <p class="mb-4 text-red-600">{error}</p>
                <button
                    onclick={() => window.location.reload()}
                    class="text-blue-600 hover:underline"
                >
                    إعادة المحاولة
                </button>
            </div>
        </div>
    {:else if $family_store}
        <HeaderBar />
        <main class="container mx-auto px-3 py-4 sm:px-4 sm:py-6">
            {#if $family_store.children?.length > 0}
                <ChildList />
            {:else}
                <EmptyState
                    title="لا يوجد أطفال"
                    description="لم يتم إضافة أي أطفال بعد. ابدأ بإضافة طفلك الأول!"
                />
            {/if}
        </main>
    {/if}
</div>

<AddChildModal />
<FamilySettings />
<HistoryDrawer />

{#each $family_store.children as child (child.id)}
    <RenameChildModal {child} />
    <ChildHistoryModal {child} />
    <CustomScoreModal {child} />
{/each}

<script>
import {onMount} from 'svelte'

import HistoryDrawer from '~/components/drawers/HistoryDrawer.svelte'
import ChildList from '~/components/family/ChildList.svelte'
import HeaderBar from '~/components/family/HeaderBar.svelte'
import AddChildModal from '~/components/modals/AddChildModal.svelte'
import ChildHistoryModal from '~/components/modals/ChildHistoryModal.svelte'
import CustomScoreModal from '~/components/modals/CustomScoreModal.svelte'
import FamilySettings from '~/components/modals/FamilySettings.svelte'
import RenameChildModal from '~/components/modals/RenameChildModal.svelte'
import EmptyState from '~/components/shared/EmptyState.svelte'
import Spinner from '~/components/shared/Spinner.svelte'
import {family_actions, family_store} from '~/stores.svelte.js'

let loading = true
let error = null

onMount(async () => {
    try {
        await family_actions.load_family()
    } catch (err) {
        error = err.message || 'فشل في تحميل بيانات العائلة'
    } finally {
        loading = false
    }
})
</script>
