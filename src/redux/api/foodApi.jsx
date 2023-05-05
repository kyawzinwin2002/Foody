import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const foodApi = createApi({
    reducerPath:"foodApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://www.themealdb.com/api/json/v1"}),
    tagTypes:["foodApi"],
    endpoints: (builder) => ({
        getFood:builder.query({
            query:(category) => `/1/filter.php?c=${category}`,
            providesTags:["foodApi"]
        }),
        getSingleFood:builder.query({
            query:(id) => `/1/lookup.php?i=${id}`,
            providesTags:["foodApi"]
        })
        
    })
})

export const { useGetFoodQuery,useGetSingleFoodQuery } = foodApi