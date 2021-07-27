import axios from 'axios'
import { URL } from '../config'
import { CleanProperty } from '../types'
import PropertyDisplayStack from '../routes/Tabs/components/PropertyDisplayStack'

export const filterPropertyData = (properties: any) => {

    let filteredData = []

    for (let property of properties) {
        let check = dataCheck(filteredData, property.managed_company_name)
        if (typeof (check) === 'number') {
            let propertyNameObj = { text: property.property_name, data: property }
            filteredData[check].data.push(propertyNameObj)
        } else {
            let newObj = {
                title: property.managed_company_name,
                data: [{ text: property.property_name, data: property }]
            }
            filteredData.push(newObj)
        }
    }

    return filteredData
}

export const filterUserData = (users: any) => {
    let filteredData = []

    for (let user of users) {
        if (!user.managing_company_name) {
            user.managing_company_name = 'Employees'
        }
        let check = dataCheck(filteredData, user.managing_company_name)

        if (typeof (check) === 'number') {
            let userNameObj = { text: user.email, data: user }
            filteredData[check].data.push(userNameObj)
        } else {
            let newObj = {
                title: user.managing_company_name,
                data: [{ text: user.first_name ? `${user.first_name} ${user.last_name}` : user.email, data: user }]
            }
            filteredData.push(newObj)
        }
    }

    return filteredData
}

export const cleanPropertyData = (uncleanProperties: any) => {
    let cleanProperties: CleanProperty[] = []

    for (let property of uncleanProperties) {

        let newProperty: CleanProperty = {
            companyId: property.company_id,
            managingCompanyName: property.managed_company_name,
            managingCompanyId: property.managed_company_id,
            propertyId: property.property_id,
            name: property.property_name
        }
        console.log('newProperty', newProperty)
        cleanProperties.push(newProperty)
    }

    return cleanProperties

}

const dataCheck = (data: any, title: string) => {
    for (let i = 0; i < data.length; i++) {

        if (data[i].title === title) {
            return i
        }
    }
    return false
}

export const wait = (timeout: any) => {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout);
    });
};

export const filterManagedCompanies = (managedCompanies: any, searchText: string) => {
    const filteredCompanies = [];

    for (let property of managedCompanies) {
        if (filteredCompanies.length === 5) break;

        if (property.name.includes(searchText)) filteredCompanies.push(property);
    }
    return filteredCompanies;
};

export const fetchManagedCompanies = async () => {
    const res = await axios.get(`${URL}/api/companies/1`)
    return res.data
};

export const fetchUsers = async () => {
    const res = await axios.get(`${URL}/api/companies/users`)
    return res.data
};