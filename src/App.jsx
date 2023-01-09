import { useState } from 'react'
import { If } from './If'
import { Then } from './Then'
import { Else } from './Else'

function App() {
  const [renderTrue, setRenderTrue] = useState(true)

  return (
    <>
      <button onClick={() => setRenderTrue(!renderTrue)}>change state</button>
      <If conditional={renderTrue}>
        <Then>
          <div style={{background: 'green'}}>
            <h1>True div</h1>
          </div>
        </Then>
        <Else>
          <div style={{background: 'purple'}}>
            <h1>False div</h1>
          </div>
        </Else>
      </If>
    </>
  )
}

export default App
