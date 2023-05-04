import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const foodApi = createApi({
    reducerPath:"foodApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://www.themealdb.com/api/json/v1/1"}),
    tagTypes:["foodApi"],
    endpoints: (builder) => ({
        getFood:builder.query({
            query:() => "/categories.php",
            providesTags:["foodApi"]
        }),
        
    })
})

export const { useGetFoodQuery } = foodApi