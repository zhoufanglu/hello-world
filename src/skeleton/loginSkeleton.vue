<template>
    <div class="p-login-Skeleton">
        <content-loader
                :height="300"
                :width="280"
                :speed="2"
                primaryColor="#f3f3f3"
                secondaryColor="#fdfbdb"
        >
            <rect x="90" y="20" rx="4" ry="4" width="100" height="20" />
            <rect x="20" y="80" rx="3" ry="3" width="240" height="20" />
            <rect x="20" y="140" rx="3" ry="3" width="240" height="20" />
            <rect x="20" y="200" rx="3" ry="3" width="240" height="20" />
            <rect x="90" y="260" rx="4" ry="4" width="100" height="20" />
        </content-loader>
    </div>
</template>

<script>
  import {ContentLoader } from 'vue-content-loader'
  export default {
    name: 'loginSkeleton',
    components:{
      ContentLoader
    }
  };
</script>

<style scoped>
    .p-login-Skeleton{
        margin: 0 auto;
        height: 300px;
        width: 280px;
    }
</style>