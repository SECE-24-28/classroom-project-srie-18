import check from "../validate"
export default function Loginpage({username,password}) {
return(
< >
<form action="">
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <label htmlFor="username">{username}</label>
              </td>
              <td>
                <input type="text" id="username" name="username" required placeholder="USERNAME" />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="password">{password}:</label>
              </td>
              <td>
                <input type="password" id="password" name="password" required placeholder="PASSWORD" />
              </td>
            </tr>
            <tr>
              <td>
                <input type = "checkbox" value="remember" id="remember" name="remember"></input>
                <label htmlFor="remember">Remember me?</label>
              </td>
              <td>
                <input type="button" value="submit" onClick={check}/>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      </> 
      )}