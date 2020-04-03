import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/home'
import Contato from '../pages/contato'
import Portifolio from '../pages/portifolio'

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contato" exact component={Contato} />
      <Route path="/portifolio" exact component={Portifolio} />
    </Switch>
  )
}

export default Routes