import axios from 'axios'
import { CleanProperty } from '../types';
// const URL = "https://propert-api.com";
const URL = "http://localhost:4068";


export const userRegister = (
    typeOfUser: 'admin' | 'employee' | 'customer',
    email: string,
    managedCompanyId: string | null,
) => {
    return axios
        .post(`${URL}/api/register`, {
            typeOfUser: typeOfUser,
            managedCompanyId: managedCompanyId,
            companyId: 1,
            email: email
        })
        .then(res => {
            // console.log(res.data)
            return 'User Added'
        })
        .catch(err => {
            console.log(err.statusMessage)
            return 'Error'
        });
};

export const fetchPosts = async (userId: number | string) => {
    const res = await axios.get(`${URL}/api/company/posts?id=1`)

    return res.data
}

export const postForm = (
    title: string,
    summary: string,
    property: CleanProperty,
    beforeImages: any,
    afterImages: any
) => {
    axios.post(`${URL}/api/company/post`, {
        beforeImages,
        companyId: property.companyId,
        managedCompanyId: property.managingCompanyId,
        propertyId: property.propertyId,
        afterImages,
        summary,
        title
    })
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
}

export const fetchProperties = async (userId: string | number) => {
    const res = await axios.get(`${URL}/api/company/properties?userId=${userId}`)
    return res.data
}

export const fetchManagedCompanies = async () => {
    const res = await axios.get(`${URL}/api/companies/1`)
    return res.data
};

export const fetchUsers = async () => {
    const res = await axios.get(`${URL}/api/companies/users`)
    return res.data
};

export const fetchPostsByProperty = async (propertyId: string) => {
    const res = await axios.get(`${URL}/api/company/property/${propertyId}`)
    return res.data

}

export const loginUser = async (email: string, password: string) => {
    console.log(email)
    console.log(URL)
    let res = await axios.post(`${URL}/api/login`, { email: email, password: password })
    console.log(res.data)
    return res.data
}
export const registerUser = async (email: string, password: string, firstName: string, lastName: string) => {
    let res = await axios.post(`${URL}/api/signup`, { email: email, password: password, firstName: firstName, lastName: lastName })
    return res.data
}