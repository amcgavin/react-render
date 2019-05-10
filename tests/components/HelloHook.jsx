import React, {useEffect, useCallback} from 'react'

const HookComponent = () => {
  useEffect(() => {console.log('i have ran')}, [null])
  const callback = useCallback(() => {console.log('callback fired')}, [null])

  return <div>
    <button onClick={callback}>Click Me</button>
  </div>
}


class MyComponent extends React.Component {
  render() {
    return <HookComponent />
  }
}

export default MyComponent
export {React}
