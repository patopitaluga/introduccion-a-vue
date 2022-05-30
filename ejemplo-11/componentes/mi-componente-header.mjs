const miComponenteHeader = {
  template: `
  <div>
    Hello world {{ miVariable }}
  </div>
`
  data: function() {
    return {
      miVariable: 'hola',
    };
  },
};

export { miComponenteHeader };
