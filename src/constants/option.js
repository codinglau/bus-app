// @ts-check
// global options
export default function useOption() {
  const option = {
    companies: [
      { 
        value: 'kmb', 
        label: 'constant.company.kmb_lwb', 
        color: 'red-5',
      },
      { 
        value: 'nwfb', 
        label: 'constant.company.nwfb',
        color: 'yellow-7',
      },
      { 
        value: 'ctb', 
        label: 'constant.company.ctb',
        color: 'teal',
      },
      // { 
      //   value: 'mtr', 
      //   label: 'constant.company.mtr',
      //   color: 'red',
      // },
      { 
        value: 'nlb', 
        label: 'constant.company.nlb',
        color: 'light-green',
      },
    ],

    // get company ids
    getCompanyIds: function () {
      return this.companies.map((
        /** @type {{ value: any; }} */ c
      ) => c.value);
    },

    // get company list
    getCompanyList: function (routeData = false) {
      let companyList = [];

      if (routeData) {
        companyList = this.companies.map((c) => ({
          ...c,
          to: {
            name: 'bus.routeList',
            params: { companyId: c.value },
          }
        }));
      } else {
        companyList = this.companies.slice();
      }

      return companyList;
    },
  };

  return option;
}