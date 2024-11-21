import './App.css'


const links = [
  { name: 'Instagram', icon: 'https://ugc.production.linktr.ee/3bcff3b8-275c-4aa8-baae-7eb21ae71534_1000004826.png?io=true&size=thumbnail-stack-v1_0', url: 'https://instagram.com/@soy-merchus-1985' },
  { name: 'Discord', icon: 'https://ugc.production.linktr.ee/bc5b39b0-dcdc-460b-b457-0a5f75ec4fd7_1000004830.png?io=true&size=thumbnail-stack-v1_0', url: 'https://discord.gg/VYKjUrgC' },
  { name: 'Twitch', icon: 'https://ugc.production.linktr.ee/92420983-068e-4ffa-af83-21500df4ed27_1000004177.png?io=true&size=thumbnail-stack-v1_0', url: 'https://www.twitch.tv/soy_merchus_1985' },
  { name: 'X', icon: 'https://ugc.production.linktr.ee/3eda93e6-70cf-4cb4-a20a-7413bfa69a03_1000004829.png?io=true&size=thumbnail-stack-v1_0', url: 'https://x.com/soyMerchus1985' },
  { name: 'Facebook', icon: 'https://ugc.production.linktr.ee/2471a12c-0d0e-4101-a1af-c52c43f6a567_1000004828.png?io=true&size=thumbnail-stack-v1_0', url: 'https://www.facebook.com/profile.php?id=61556814429159&mibextid=ZbWKwL' },
  { name: 'Kick', icon: 'https://ugc.production.linktr.ee/3a260b26-2ae5-4a50-921b-38a3aabe473e_1000004166.png?io=true&size=thumbnail-stack-v1_0', url: 'https://kick.com/soy-merchus-1985' },
]


function App() {


  return (
    <>
       <div className="container">
      {/* Perfil */}
      <div className="profile">
        <img
          src="https://static-cdn.jtvnw.net/jtv_user_pictures/24f98501-0fc5-4d57-b774-2d2bb60168bd-profile_image-70x70.png" // Cambia esto por tu foto
          alt="Profile"
          className="profile-picture"
        />
        <h1 className="username">@soy_merchus_1985</h1>
        <p className="bio">Perfil para juegos clips y streaming</p>
      </div>

      {/* Links */}
      <div className="links">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <img src={link.icon} alt={`${link.name} icon`} className="link-icon" />
            <span className="name">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
      
    </>
  )
}

export default App
