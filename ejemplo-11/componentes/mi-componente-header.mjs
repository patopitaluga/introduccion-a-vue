const miComponenteHeader = {
  template: `
  <header>
    Este es el header {{ miVariable }}
  </header>
`,
  data: function() {
    return {
      miVariable: 'hola',
    };
  },
};

export { miComponenteHeader };
