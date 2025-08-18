<div
    class="flex min-h-[100svh] items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4"
>
    <div class="w-full max-w-md">
        <div class="mb-8 text-center">
            <h1 class="mb-2 text-3xl font-bold text-gray-900">انضم لعائلة</h1>
            <p class="text-gray-600">انضم إلى عائلة موجودة باستخدام رمز الانضمام</p>
        </div>

        <Card class="">
            <CardHeader class="text-center">
                <CardTitle class="">رمز الانضمام: {code}</CardTitle>
                <CardDescription class="">جاري الانضمام للعائلة...</CardDescription>
            </CardHeader>

            <CardContent class="text-center">
                {#if loading}
                    <Spinner size="lg" text="جاري الانضمام للعائلة..." />
                {:else if error}
                    <div class="space-y-4">
                        <div class="flex justify-center">
                            <AlertCircle class="h-12 w-12 text-red-500" />
                        </div>
                        <p class="text-red-600">{error}</p>
                        <Button onclick={go_back} class="w-full">
                            <ArrowLeft class="mr-2 h-4 w-4" />
                            العودة للصفحة الرئيسية
                        </Button>
                    </div>
                {/if}
            </CardContent>
        </Card>
    </div>
</div>

<script>
import {AlertCircle, ArrowLeft} from '@lucide/svelte'
import {getContext, onMount} from 'svelte'

import Spinner from '~/components/shared/Spinner.svelte'
import {Button} from '~/lib/components/ui/button/index.js'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '~/lib/components/ui/card/index.js'
import {family_actions} from '~/stores.svelte.js'

const router = getContext('router')

export let code = ''

let loading = true
let error = null

onMount(async () => {
    if (!code) {
        error = 'رمز الانضمام مطلوب'
        loading = false
        return
    }

    await family_actions.join_family(code.toUpperCase())
    router.route('/family')
    loading = false
})

function go_back() {
    router.route('/')
}
</script>
