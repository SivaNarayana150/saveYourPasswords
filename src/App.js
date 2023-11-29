import './App.css'

import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

class App extends Component {
  state = {
    userDetailsList: [],
    websiteNameInput: '',
    userNameInput: '',
    passwordInput: '',
    checkBoxStatus: false,
  }

  ChangeCheckBoxStatus = () => {
    this.setState(prev => ({checkBoxStatus: !prev.checkBoxStatus}))
  }

  websiteNameChange = event => {
    this.setState({websiteNameInput: event.target.value})
  }

  useNameStateChange = event => {
    this.setState({userNameInput: event.target.value})
  }

  changePasswordStatus = event => {
    this.setState({passwordInput: event.target.value})
  }

  deleteItemOfPasswordUser = eachUserId => {
    const {userDetailsList} = this.state

    const updatedUserList = userDetailsList.filter(
      eachUser => eachUser.id !== eachUserId,
    )

    this.setState({userDetailsList: updatedUserList})
    console.log(eachUserId)
  }

  addObjectToUserDetailsList = event => {
    event.preventDefault()
    const {websiteNameInput, userNameInput, passwordInput} = this.state

    const userDetailsObject = {
      id: uuidv4(),
      webSiteName: websiteNameInput,
      userName: userNameInput,
      password: passwordInput,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png',
    }

    this.setState(prev => ({
      userDetailsList: [...prev.userDetailsList, userDetailsObject],
      websiteNameInput: '',
      userNameInput: '',
      passwordInput: '',
    }))
  }

  showUpdatedSearchList = event => {
    const inputElementsearcValue = event.target.value.toLowerCase()
    const {userDetailsList} = this.state
    const upDatedSearchListResults = userDetailsList.filter(eachUser =>
      eachUser.webSiteName.toLowerCase().includes(inputElementsearcValue),
    )
    this.setState({userDetailsList: upDatedSearchListResults})
  }

  render() {
    const {
      userDetailsList,
      websiteNameInput,
      userNameInput,
      passwordInput,
      checkBoxStatus,
    } = this.state

    const userListLength = userDetailsList.length === 0
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          className="app-logo"
          alt="app logo"
        />
        <div className="card-background">
          <div className="register-container">
            <form onSubmit={this.addObjectToUserDetailsList}>
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
                    onChange={this.websiteNameChange}
                    value={websiteNameInput}
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
                    onChange={this.useNameStateChange}
                    value={userNameInput}
                  />
                </div>
              </div>

              <div className="input-container">
                <div className="input-logo-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    className="logo-image-style"
                    alt="password"
                  />
                </div>
                <div className="input-element">
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="input-style password-input-star"
                    onChange={this.changePasswordStatus}
                    value={passwordInput}
                  />
                </div>
              </div>

              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>

          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
            alt="password manager"
            className="password-manager-image"
          />
        </div>

        <div className="passwords-container">
          <div className="passwords-count-search-container">
            <div className="password-heading-count-container">
              <h1 className="your-passwords-heading">Your Passwords</h1>
              <p className="password-count">{userDetailsList.length}</p>
            </div>
            <div className="search-container">
              <div className="search-icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                  className="search-image"
                  alt="search"
                />
              </div>
              <div className="search-input-element-container">
                <input
                  type="search"
                  placeholder="search"
                  className="input-element"
                  onChange={this.showUpdatedSearchList}
                />
              </div>
            </div>
          </div>
          <hr className="horizontal-line" />
          <div>
            <input
              type="checkbox"
              id="checkBox"
              className="check-box-element"
              onClick={this.ChangeCheckBoxStatus}
            />
            <label htmlFor="checkBox" className="check-description">
              Show Passwords
            </label>
          </div>

          {userListLength ? (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
                alt="no passwords"
                className="no-password-image"
              />
              <p className="no-passwords-description">No passwords</p>
            </div>
          ) : (
            <ul className="passwords-unorder-List">
              {userDetailsList.map(eachUser => (
                <li key={eachUser.id} className="list-styling">
                  <div className="password-user-container">
                    <div className="logo-details-container">
                      <div className="personsLogo-container">
                        <h1 className="personsLogo">
                          {eachUser.userName[0].toUpperCase()}
                        </h1>
                      </div>
                      <div>
                        <p className="web-site-name">{eachUser.webSiteName}</p>
                        <p className="web-site-name">{eachUser.userName}</p>
                        {checkBoxStatus ? (
                          <p className="web-site-name">{eachUser.password}</p>
                        ) : (
                          <img
                            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
                            className="stars-image"
                            alt="stars"
                          />
                        )}
                      </div>
                    </div>

                    <div>
                      <button
                        className="delete-button"
                        type="button"
                        data-testid="delete"
                        onClick={() =>
                          this.deleteItemOfPasswordUser(eachUser.id)
                        }
                      >
                        <img
                          src={eachUser.imageUrl}
                          alt="delete"
                          className="delete-icon"
                        />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App
