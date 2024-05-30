<script setup>
import InfoComp from './InfoComp.vue';
import SidebarRepo from './SidebarRepo.vue';
import RepoHome from './RepoHome.vue';

function triggerError() {
    throw new Error('This is a test error')
}
</script>

<template>
    <div class="home-container">
        <div class="main-wrapper lg:grid-styles lg:margin">
            <aside class="hidden lg:block lg:border lg:border-t-0 lg:border-l-0 lg:border-b-0 lg:border-secondary">
                <SidebarRepo/>
            </aside>
            <main class="main">
                <InfoComp/>
                <RepoHome/>
            </main>
        </div>
        <footer class="border-secondary border border-t mt-16 h-full w-full text-center p-5 font-light text-sm md:text-2xl lg:text-sm lg:text-start">
        &copy;{{ `Kenneth Bassey ${new Date().getFullYear()}` }}
            <button @click="triggerError" type="button" class="ml-10 rounded-md p-1 bg-tinWhite text-gray-800 font-semibold">Test Error</button>
        
    </footer>
    </div>
    
</template>