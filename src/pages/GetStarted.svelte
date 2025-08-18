<div
    class="flex min-h-[100svh] items-center justify-center bg-gradient-to-br from-muted to-background p-4"
>
    <div class="w-full max-w-md">
        <div class="mb-8 text-center">
            <h1 class="mb-2 text-3xl font-bold text-foreground">نظام نقاط الأطفال</h1>
            <p class="text-muted-foreground">أنشئ عائلة جديدة أو انضم إلى عائلة موجودة</p>
        </div>

        <div class="rounded-xl border-2 border-border bg-card p-6 shadow-2xl">
            <Tabs value="create" class="w-full">
                <TabsList class="grid w-full grid-cols-2">
                    <TabsTrigger value="create" class="">إنشاء عائلة</TabsTrigger>
                    <TabsTrigger value="join" class="">انضم لعائلة</TabsTrigger>
                </TabsList>

                <TabsContent value="create" class="mt-6">
                    <CreateFamilyForm />
                </TabsContent>

                <TabsContent value="join" class="mt-6">
                    <JoinFamilyForm />
                </TabsContent>
            </Tabs>
        </div>
    </div>
</div>

<script>
import CreateFamilyForm from '~/components/forms/CreateFamilyForm.svelte'
import JoinFamilyForm from '~/components/forms/JoinFamilyForm.svelte'
import {Tabs, TabsContent, TabsList, TabsTrigger} from '~/lib/components/ui/tabs/index.js'
</script>
