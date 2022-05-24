 const projectsInfo = [
    {
        name:'habittracker',
        description:`Esta herramienta te ayudará a llevar un registro de tus hábitos. Solamente necesitas crear una o mas listas de actividades,
        asignar una lista a un día del calendario y rellenar con información los dias en los que hayas completado las actividades establecidas. Cada día podras
        observar tu rendimiento.

        Este 'habit Tracker' esta compuesto por dos aplicaciones, una de frontend desarrollada con React y una API que funciona como backend desarrollada con Nodejs y express. La API
        hace consultas a la base de datos que utiliza MongoDB Atlas.

        La app cuenta con un tutorial
        `,
        imgs:['calendar-colored.png', 'calendar.png', 'calendarform.png', 'calendarhome.png'],
        tutorialurl:'https://contador-f724b.web.app/tutorial'

    },
    {
        name:'micontador',
        description:`Esta herramienta te ayudará a llevar un registro de tus gastos e ingresos. Ingresa tus tickets de compra proporcionando información sobre el monto y
        el tipo de producto así como proveedor. La aplicación cuenta con varias secciones donde podrás observar gráficos con tu información utilizando distintos filtros de tiempo
        (fecha, mes, año).     

        'Mi contador está compuesto por dos aplicaciones, una de frontend desarrollada con Angular y una API que funciona como backend desarrollada con Nodejs y express. La API
        hace consultas a la base de datos que utiliza MongoDB Atlas.

        La app cuenta con un tutorial
        `,
        imgs:['newticket.png', 'incomestatement.png', 'graphics.png', 'ticketlist.png'],
        tutorialurl:'https://habits-app-front.herokuapp.com/tutorial'
    }
]

export default projectsInfo;