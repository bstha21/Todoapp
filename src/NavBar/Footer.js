import React from 'react'

export default function Footer(props) {
  return (
  <footer className={`footer fixed-bottom mt-auto py-3 bg-${props.mode}` }>
          <div className="container text-center">
          <span className={`text-${props.mode==='light'?'dark':'light'}`}> &copy; 2022 Design and Code by bishalpro21</span>
          </div>
      </footer>
  )
}
 