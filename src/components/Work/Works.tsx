import Work from "./Work/Work";

import styles from "./Works.module.css";

/**
 * The Works component
 * 
 * This component contains the works displayed on the index (main) page of the website.
 * 
 * This component renders multiple #Work components with an icon, title, color and text describing each skill.
 */

interface props {}

const Works: React.FC<props> = () => {
  return (
    <section id="work" className={ styles.works }>
      <div className={ styles.worksWrapper }>
        
        <h2>My Work</h2>

        <div className={ styles.worksContainer }>
          <Work src="/images/idf.webp" alt="Israel Defense Forces" iconHref="https://www.idf.il/en/" title="Israel Defense Forces" titleHref="https://www.idf.il/en/" role="Lead Developer">
            <p>
              In the <strong>IDF</strong>, I served as a developer, and later on founded <strong>Unit 88</strong>.
              I was working on several software and applications used by over 2,000 soldiers to this day.
            </p>
          </Work>

          <Work src="/images/hypixel.webp" alt="Hypixel" iconHref="https://hypixel.net/members/lielamar.175428/" title="Hypixel Network" titleHref="https://hypixel.net/" role="Staff Member">
            <p>
              <strong>Hypixel</strong> is the largest Minecraft Network with over 20 million players, there I have been volunteering for 2 years, from 2019 to 2021.
              I mainly focused on player assistance, but I also trained new staff members, reported bugs, and tested new feautes and updates.
            </p>
          </Work>

          <Work src="/images/minestore.webp" alt="Minestore Plugin" iconHref="https://github.com/LielAmar/Minestore" title="Minestore" titleHref="https://bit.ly/3fhysUM" role="Developer & UI Designer">
            <p>
              <strong>Minestore</strong> is a Buycraft (Tebex) alternative with a primary goal of authenticating purchases In-Game.
              It is written in Java and NodeJS, using Sockets, Databases and more cool stuff!
              Source-Code is available on <a href="https://github.com/LielAmar/Minestore" target="_blank" rel="noopener noreferrer" >GitHub</a>.
            </p>
          </Work>


          <Work src="/images/lielsutils.webp" alt="Liel's Utils Lib" iconHref="https://github.com/LielAmar/LielsUtils" title="Liel's Utils" titleHref="https://github.com/LielAmar/LielsUtils" role="Developer">
            <p>
              <strong>Liel's Utils</strong> is a set of libraries for Spigot.
              The libraries include but not limited to Packets, Custom Entities, Scoreboards, Bossbars, Validation, Databases, Maps, GUIs and Commands.
              Source-Code is available on <a href="https://github.com/LielAmar/LielsUtils" target="_blank" rel="noopener noreferrer" >GitHub</a>.
            </p>
          </Work>

          <Work src="/images/partygames.webp" alt="Party Games Plugin" iconHref="https://github.com/LielAmar/Party-Games" title="Party Games" titleHref="https://github.com/LielAmar/Party-Games" role="Developer">
            <p>
              <strong>Party Games</strong> is a Spigot plugin, a fork of <a href="https://hypixel.net/forums/arcade-games.80/">Hypixel's Party Games</a> plugin.
              It contains 26 different Minigames and tens of features, while being highly customizable.
              Source-Code is available on <a href="https://github.com/LielAmar/Party-Games" target="_blank" rel="noopener noreferrer" >GitHub</a>.
            </p>
          </Work>

          <Work src="/images/2fa.webp" alt="2FA Plugin" iconHref="https://github.com/LielAmar/2FA" title="2FA" titleHref="https://bit.ly/3wzBsBQ" role="Developer">
            <p>
              <strong>Two Factor Authentication</strong> is an Authentication Spigot plugin.
              It allows players to use Authentication Apps such as Google Authenticator, using the TOTP algorithm.
              Source-Code is available on <a href="https://github.com/LielAmar/2FA" target="_blank" rel="noopener noreferrer" >GitHub</a>.
            </p>
          </Work>


          <Work src="/images/languagefix.webp" alt="Language Fix Plugin" iconHref="https://github.com/LielAmar/LanguageFix" title="Language Fix" titleHref="https://bit.ly/3hMGZ3I" role="Developer">
            <p>
              <strong>LanguageFix</strong> is a fork of <strong>HebrewFix</strong>. It was developed to give a better solution for Right-To-Left issues in Minecraft, supporting every RTL language with a better algorithm.
              Source-Code is available on <a href="https://github.com/LielAmar/LanguageFix" target="_blank" rel="noopener noreferrer" >GitHub</a>.
            </p>
          </Work>

          <Work src="/images/armsrace.webp" alt="Arms Race Plugin" iconHref="https://bit.ly/3oPl9hB" title="Arms Race" titleHref="https://bit.ly/3oPl9hB" role="Developer">
            <p>
              <strong>ArmsRace</strong> is a one of its kind Minecraft Minigame. It features Combat and Shop Systems, Cosmetics, Skills, Perks, Pickups, Unlimited Maps, Unlimited Tiers and more.
            </p>
          </Work>

          <Work src="/images/lielscore.webp" alt="Liel's Core Lib" iconHref="https://github.com/LielAmar/LielsCore" title="Liel's Core" titleHref="https://github.com/LielAmar/LielsCore" role="Developer">
            <p>
              <strong>Liel's Core</strong> is a Spigot plugin created to handle, enable and disable certain aspects of Minecraft.
              It has more than 50 essentials features including Commands and Properties.
              Source-Code is available on <a href="https://github.com/LielAmar/LielsCore" target="_blank" rel="noopener noreferrer" >GitHub</a>.
            </p>
          </Work>

          
          <Work src="/images/talecraft.webp" alt="Talecraft SMP" iconHref="https://talecraft.co.il/" title="Talecraft" titleHref="https://talecraft.co.il/" role="Developer & Manager">
            <p>
              <strong>Talecraft</strong> was a Youtubers SMP Server with custom-coded Minigames and Features.
              With over 15 Youtubers, Talecraft became one of the most popular and followed shows in the Israeli Youtube Community.
            </p>
          </Work>

          <Work src="/images/play-il.webp" alt="Play-IL" iconHref="https://forum.play-il.co.il/member/8558-lielamar" title="Play-IL" titleHref="https://forum.play-il.co.il/" role="Management Team">
            <p>
              <strong>Play-IL</strong> is the biggest gaming community in Israel.
              I was taking a part of the Management Team since 2017 and my role varies between helping with development, server management and staff management.
            </p>
          </Work>

          <Work src="/images/play-il_network.webp" alt="Play-IL Network" iconHref="https://www.youtube.com/watch?v=upHr3M-UoPI" title="Play-IL Network" titleHref="https://www.youtube.com/watch?v=upHr3M-UoPI" role="Manager & Lead Developer">
            <p>
              <strong>Play-IL Network</strong> was a Minecraft Network.
              It offered over 10 different Minigames and attracted thousands of players.
              The official youtube channel, containing several videos about the Network, can be found <a href="https://www.youtube.com/channel/UCNnnS7U1ZN0SlSCeMhgDMpw" target="_blank" rel="noopener noreferrer" >here</a>.
            </p>
          </Work>


          <Work src="/images/hebrewfix.webp" alt="Hebrew Fix" iconHref="https://bitbucket.org/hebrewfix/hebrewfix-plugin/src" title="Hebrew Fix" titleHref="https://dev.bukkit.org/projects/languagefix" role="Proxy Developer">
            <p>
              <strong>HebrewFix</strong> is the largest Israeli Bukkit plugin, developed to fix Right-To-Left issues in Minecraft.
              Source-Code is available on <a href="https://bitbucket.org/hebrewfix/hebrewfix-plugin/src/develop/" target="_blank" rel="noopener noreferrer" >BitBucket</a> for the Bukkit version and on <a href="https://github.com/LielAmar/HebrewFixBungeecord" target="_blank" rel="noopener noreferrer" >GitHub</a> for the BungeeCord version.
            </p>
          </Work>

          <Work src="/images/youtube.webp" alt="Youtube Channel" iconHref="https://www.youtube.com/channel/UCK9c8Rixqzy7LqG8eBDy9Fg" title="Youtube Channel" titleHref="https://www.youtube.com/channel/UCK9c8Rixqzy7LqG8eBDy9Fg" role="Editor & Designer">
            <p>
              <strong>Liel Amar</strong> is my Youtube Channel, used to share my videos, media and content. I have collaborated with different Youtubers and worked on large amount of projects.
            </p>
          </Work>

          <Work src="/images/lielsbot.webp" alt="Liel's Discord Bot" iconHref="https://github.com/LielAmar/LielsBot" title="Liel's Discord Bot" titleHref="https://discord.com/invite/NzgBrqR" role="Developer">
            <p>
              <strong>Liel's Bot</strong> is a discord bot used in <a href="https://discord.com/invite/NzgBrqR" target="_blank" rel="noopener noreferrer" >LielAmar's Discord Server</a>.
              It is being developed with Python and is capable of Self-Moderation, Hypixel Linking using its <a href="https://api.hypixel.net/" target="_blank" rel="noopener noreferrer" >Public API</a>,
              Logging Actions, Contacting Staff and much more.
            </p>
          </Work>


          <Work src="/images/cybernet.webp" alt="Cybernet's Logo" iconHref="https://cybernet.co.il/" title="Attendance System" titleHref="https://cybernet.co.il/" role="Developer & UI Designer">
            <p>
              <strong>Cybernet's Attendance System</strong> is a Node JS website developed during Covid-19. It is targeted for Community Centers to save, manage and display Student's Attendance and Health Statements in their classes.
            </p>
          </Work>

          <Work src="/images/completepermissions.webp" alt="Complete Permissions Plugin" iconHref="https://github.com/LielAmar/CompletePermissions" title="CompletePermissions" titleHref="https://bit.ly/3vfng0p" role="Developer">
            <p>
              <strong>Complete Permissions</strong> is an advanced permissions plugin for Spigot.
              It offers a lot of features other lead plugins lack and focuses on being efficient and easy to use.
            </p>
          </Work>

          <Work src="/images/mycinema.webp" alt="MyCinema Android App" iconHref="https://github.com/LielAmar/MyCinema" title="MyCinema" titleHref="https://github.com/LielAmar/MyCinema" role="Developer & UI Designer">
            <p>
              <strong>MyCinema is an Android</strong> Application used to view, review and order tickets for new movies. It was written in Java, PHP and SQL, and includes built-in Registration and Administration functionalities.
            </p>
          </Work>
        </div>

      </div>
    </section>
  );
}

export default Works
