import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from 'react-native-elements';
import {DataTable, withTheme} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchCovidByCountryAction,
  fetchTotalDataAction,
} from '../redux/actions';

const LiveUpdate = ({theme}) => {
  const [page, setPage] = useState(0);
  const itemsPerPage = 10;
  const from = page * itemsPerPage;
  const to = (page + 1) * itemsPerPage;
  const {colors} = theme;
  const dispatch = useDispatch();
  const {byCountry, totalData} = useSelector((state) => state.covid);

  useEffect(() => {
    dispatch(fetchTotalDataAction());
    dispatch(fetchCovidByCountryAction());
  }, [dispatch]);

  const filteredCountries = byCountry.filter((val, index) => {
    //   page =0, index = 0, from = 0*10 = 0, to=0+1*10
    return index >= from && index < to;
  });

  const renderTable = () => {
    return filteredCountries.map((val, i) => {
      return (
        <DataTable.Row key={i}>
          <DataTable.Cell>{val.Country}</DataTable.Cell>
          <DataTable.Cell numeric>{val.NewConfirmed}</DataTable.Cell>
          <DataTable.Cell numeric>{val.TotalConfirmed}</DataTable.Cell>
          <DataTable.Cell numeric>{val.TotalRecovered}</DataTable.Cell>
          <DataTable.Cell numeric>{val.TotalDeaths}</DataTable.Cell>
        </DataTable.Row>
      );
    });
  };
  return (
    <View style={{backgroundColor: colors.background, flex: 1}}>
      <Header
        centerComponent={{text: 'LIVE UPDATE', style: {color: '#fff'}}}
        backgroundColor={colors.background}
        containerStyle={{
          backgroundColor: colors.surface,
          borderBottomColor: 'transparent',
        }}
      />
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Region</DataTable.Title>
          <DataTable.Title numeric>New Cases</DataTable.Title>
          <DataTable.Title numeric>Total Cases</DataTable.Title>
          <DataTable.Title numeric>Recovered</DataTable.Title>
          <DataTable.Title numeric>Deaths</DataTable.Title>
        </DataTable.Header>
        {renderTable()}
        <DataTable.Pagination
          page={page}
          numberOfPages={Math.floor(totalData / itemsPerPage)}
          onPageChange={(page) => setPage(page)}
          label={`${from + 1}-${to} of ${totalData}`}
        />
      </DataTable>
    </View>
  );
};

export default withTheme(LiveUpdate);

const styles = StyleSheet.create({});
