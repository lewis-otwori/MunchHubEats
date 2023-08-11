import axios from 'axios';
import React, {createContext, useContext, useEffect, useState } from 'react'

const UserAuthContext = createContext();

const baseURL = "http://127.0.0.1:5955"

const UserAuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [users, setUsers] = useState([])
    const [restaurants, setRestaurants] = useState([])
    const [owners, setOwners] = useState([])
    const [loading, setIsLoading] = useState(true)
    const [isAdmin, setIsAdmin] = useState(false)
    const [authenticaated, setAuthenticaated] = useState(false)


    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000)
    }, [])
    
    // CRUD operations for managing users.
    useEffect(() => {
        getAllUsers()
    }, [])
    const getAllUsers = async () => {
        const response = await axios.get(`${baseURL}/users`)
        setUsers(response.data)
    }
    const loginUser = async (userInfo) => {
        setIsLoading(true)

        try{
            const response = await axios.post(`${baseURL}/login`, userInfo)

            if (response.status === 200) {
            const { token, user, redirect_url } = response.data
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            setUser(user)
            setAuthenticaated(true)

            if (redirect_url) {
                window.location.href = redirect_url
            }
            } else {
                console.log('Login failed')
            }
        } catch (err) {
            console.log(err)
        }
        setIsLoading(false)
    }

    const logoutUser = () => {
        localStorage.removeItem('token')
        setUser(null)
        setAuthenticaated(false)
    }
    
    const registerUser = async (userInfo) => {
        setIsLoading(true)

        try {
            const response = await axios.post(`${baseURL}/register`, userInfo)
            if (response.statusCode === 201) {
                const { token, user, redirect_url } = response.data
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                console.log('User registered successfully')

                if (redirect_url) {
                    window.location.href = redirect_url
                }
            }
        } catch (error) {
            console.log(error, 'Registration failed')
        }
        setIsLoading(false)
    }
    // CRUD operations for managing Owners
    useEffect(() => {
        getAllOwners()
    }, [])

    const getAllOwners = async () => {
        setIsLoading(true)

        try {
            const response = await axios.get(`${baseURL}/owners`)
            setOwners(response.data)
            console.log('All Owners Fetched Successfully')
        } catch (err) {
            console.log("Error fetching Owners", err)
        }

    }

    // CRUD operations for managing restaurants.
    const addRestaurant = async (restaurantInfo) => {
        try {
            const response = await axios.post(`${baseURL}/create-restaurant`, restaurantInfo)
            console.log('Restaurant Added SuccessFully', response.data)
            
            if (response.status === 201) {
                window.location.href = 'restaurants-list'
            }
        } catch (err) {
            console.log("Failed to create Restaurant", err)
        }
    };

    useEffect(() => {
        getAllRestaurants()
    }, [])

    const getAllRestaurants = async () => {
        setIsLoading(true)

        try {
            const response = await axios.get(`${baseURL}/restaurants`)
            setRestaurants(response.data)
        } catch (err) {
            console.log("Error fetching restaurants", err)
        }
        setIsLoading(false)
    }

    const updateRestaurant = (id, updatedRestaurant) => {
        const updatedRestaurants = restaurants.map(restaurant => restaurant.id === id?{ ...restaurant, ...updatedRestaurant }: restaurant);
        setRestaurants(updatedRestaurants)
    }

    const deleteRestaurant = (id) => {
        const updatedRestaurants = restaurants.filter(restaurant => restaurant.id!== id)
        setRestaurants(updatedRestaurants)
    };

    const contextData = {
        user,
        users,
        setUser,
        authenticaated,
        restaurants,
        owners,
        getAllRestaurants,
        getAllOwners,
        addRestaurant,
        updateRestaurant,
        deleteRestaurant,
        isAdmin,
        setIsAdmin,
        loginUser,
        registerUser,
        logoutUser,
    }

    return (
        <UserAuthContext.Provider value={contextData}>
            {
                loading ? <p className='flex items-center justify-center'>Loading...</p> :
            children
            }
        </UserAuthContext.Provider>
    )
};

const useUserAuth = () => {
    const context = useContext(UserAuthContext);
    if (context === undefined) {
        throw new Error('useUserAuth must be used within a UserAuthProvider');
    }
    return context
}

export {UserAuthProvider, useUserAuth}