import { ref, watchEffect } from 'vue';

// const authToken = import.meta.env.VITE_VUE_APP_APIKEY;

function useFetch(url) {
    const data = ref(null);
    const error = ref(null);
    const isLoading = ref(true);

    watchEffect(() => {
        isLoading.value = true;

        fetch(url,
        //     {
        //     headers: {
        //         'Authorization': `Bearer ${authToken}`
        //     }
        // }
        ).then((res) => {
            if (!res.ok) {
                throw Error("Error fetching repositories");
            }
            return res.json();
        }).then((fetchedData) => {
            data.value = fetchedData;
            error.value = null;
            isLoading.value = false;
        }).catch((err) => {
            error.value = err.message;
            isLoading.value = false;
        });
    });

    return {data, error, isLoading}
}

export default useFetch;