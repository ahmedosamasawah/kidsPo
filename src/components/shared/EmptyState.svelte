<div class="flex flex-col items-center justify-center p-8 text-center">
    <h3 class="mb-2 text-lg font-medium text-foreground">{title}</h3>
    <p class="mb-4 max-w-sm text-sm text-muted-foreground">{description}</p>
</div>

<script>
let {title = 'لا توجد بيانات', description = 'لم يتم العثور على أي محتوى لعرضه.'} = $props()
</script>
