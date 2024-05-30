<script setup></script>

<template>
    <div className="error-page">
        <div className="not-found-container mb-10 mt-44 relative">
          <div className="fontawesome-icon absolute left-3 top-7 md:text-3xl md:top-20 md:left-60 lg:left-1/3 ">
            <font-awesome-icon :icon="['fas', 'circle-exclamation']" />
          </div>
          <div className="error-list grid place-items-center">
            <h1 className="text-xl font-medium md:text-6xl md:mb-6">
              404 - Page Not Found
            </h1>
            <p className="md:text-2xl">
              The page you are looking for does not exist
            </p>
            <router-link to="/">
              <button className="mt-10 bg-tinWhite rounded-md font-semibold text-gray-800 md:w-44 md:h-16 md:text-3xl md:p-1 " type="button">
                Home <FontAwesomeIcon :icon="['fas', 'home']" />
              </button>
            </router-link>
          </div>
        </div>
      </div>
</template>