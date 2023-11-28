import './App.css'

const App = () => (
  <div className="bg-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
      className="app-logo"
      alt="app logo"
    />
    <div className="card-background">
      <div className="register-container">
        <h1 className="heading">Add New Password</h1>

        <div className="input-container">
          <div className="input-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              className="logo-image-style"
              alt="website"
            />
          </div>
          <div className="input-element">
            <input
              type="text"
              placeholder="Enter Website"
              className="input-style"
            />
          </div>
        </div>

        <div className="input-container">
          <div className="input-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              className="logo-image-style"
              alt="username"
            />
          </div>
          <div className="input-element">
            <input
              type="text"
              placeholder="Enter Username"
              className="input-style"
            />
          </div>
        </div>

        <div className="input-container">
          <div className="input-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              className="logo-image-style"
              alt="website"
            />
          </div>
          <div className="input-element">
            <input
              type="text"
              placeholder="Enter Password"
              className="input-style"
            />
          </div>
        </div>

        <button type="button" className="button">
          Add
        </button>
      </div>

      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
        alt="password manager"
        className="password-manager-image"
      />
    </div>
  </div>
)

export default App
