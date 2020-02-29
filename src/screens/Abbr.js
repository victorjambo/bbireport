import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {Table, Rows} from 'react-native-table-component';

const Abbr = () => {
  const data = [
    ['BBI', 'Building Bridges Initiative'],
    ['CRA', 'Commission on Revenue Allocation'],
    ['CSO', 'Civil Society Organisation'],
    ['DPP', 'Director of Public Prosecutions'],
    ['EACC', 'Ethics and Anti-Corruption Commission'],
    ['ECD', 'Early Childhood Development'],
    ['GDP', 'Gross Domestic Product'],
    ['IEBC', 'Independent Electoral and Boundaries Commission'],
    ['JSC', 'Judicial Service Commission'],
    ['MCA', 'Member of County Assembly'],
    ['MDAs', 'Ministries, Departments and Agencies'],
    ['MP', 'Member of Parliament'],
    ['M-PESA', 'Mobile Money Transfer Service in Kenya'],
    ['NCIC', 'National Cohesion and Integration Commission'],
    ['NHIF', 'National Hospital Insurance Fund'],
    ['NIS', 'National Intelligence Service'],
    ['NPS', 'National Police Service'],
    ['NGO', 'Non-Governmental Organisation'],
    ['PSC', 'Public Service Commissio'],
    ['PWDs', 'Persons with Disabilitie'],
    ['SRC', 'Salaries and Remuneration Commissio'],
    ['UNEP', 'United Nations Environment Programme'],
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <Table borderStyle={styles.table}>
          <Rows
            data={data}
            textStyle={styles.text}
            style={styles.row}
            flexArr={[1, 2]}
          />
        </Table>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  table: {
    borderWidth: 2,
    borderColor: '#c8e1ff',
  },
  container: {
    padding: 10,
    paddingTop: 15,
    paddingBottom: 30,
    backgroundColor: '#fff',
  },
  text: {
    margin: 5,
  },
  row: {
    height: 45,
  },
});

export default Abbr;
