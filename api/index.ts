import axios from 'axios'
import { CleanProperty } from '../types';
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
    console.log('hello')
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
    const res = await axios.get(`${URL}/api/company/properties`)
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