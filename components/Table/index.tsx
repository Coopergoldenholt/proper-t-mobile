import React from 'react'
import { SectionList, RefreshControl } from 'react-native'

import TableRow from './components/TableRow'
import Header from './components/Header'
import PropertyDisplayStack from '../../routes/Tabs/components/PropertyDisplayStack'

interface IProps {
    data: any;
    refreshing: boolean;
    onRefresh: any;
    onPress?: any;
}

const Table = (props: IProps) => {

    return <SectionList
        refreshControl={
            <RefreshControl refreshing={props.refreshing} onRefresh={props.onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        sections={props.data}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item, index, section }) => (
            <TableRow
                onPress={props.onPress}
                text={item.text}
                lastItem={section.data.length === index + 1 ? true : false}
                data={item.data}
            />
        )}
        renderSectionHeader={({ section: { title } }) => (
            <Header header={title} />
        )}
    />
}

export default Table