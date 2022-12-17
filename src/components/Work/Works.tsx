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
        
        <h2>My Experience & Projects</h2>

        <div className={ styles.worksContainer }>
          <Work src="/images/oversight.webp" alt="Oversight" iconHref="https://oversight.co.il/" title="Oversight" titleHref="https://oversight.co.il/" role="Fullstack Developer Intern">
            <p>
              I started working at <strong>Oversight</strong> as a Fullstack Developer Intern after finishing my first year of college.
              <br></br>
              I was assigned to work on an Israeli <strong>B2B Startup Company</strong>, doing Frontend and Backend development.
            </p>
          </Work>

          <Work src="/images/idf.webp" alt="Israel Defense Forces" iconHref="https://www.idf.il/en/" title="Israel Defense Forces" titleHref="https://www.idf.il/en/" role="Lead Developer">
            <p>
              In the <strong>IDF</strong>, I served as a developer, and later on helped found <strong>Unit 88</strong>.
              <br></br>
              I was working on several software and applications used by over 2,000 soldiers.
            </p>
          </Work>

          <Work src="/images/hypixel.webp" alt="Hypixel" iconHref="https://hypixel.net/members/lielamar.175428/" title="Hypixel Network" titleHref="https://hypixel.net/" role="Staff Member">
            <p>
              <strong>Hypixel</strong> is the largest Minecraft Network with over 20 million players. I have volunteered there for two years, from <strong>2019</strong> to <strong>2021</strong>.
              <br></br>
              I mainly focused on player assistance, training of new staff members, bug reports, and tests of new feautes and updates.
            </p>
          </Work>

          <Work src="/images/2fa.webp" alt="2FA Plugin" iconHref="https://github.com/LielAmar/2FA" title="2FA" titleHref="https://bit.ly/3wzBsBQ" role="Developer">
            <p>
              <strong>Two Factor Authentication</strong> is the best 2FA plugin for Spigot servers.
              <br></br>
              It adds 2FA support to Minecraft servers, to secure player accounts, and is used in over <strong>200 servers</strong>.
            </p>
          </Work>



          <Work src="/images/languagefix.webp" alt="Language Fix Plugin" iconHref="https://github.com/LielAmar/LanguageFix" title="Language Fix" titleHref="https://bit.ly/3hMGZ3I" role="Developer">
            <p>
              <strong>LanguageFix</strong> is Minecraft plugin developed to give a solution to <strong>Right-To-Left</strong> issues in Minecraft.
            </p>
          </Work>

          <Work src="/images/partygames.webp" alt="Party Games Plugin" iconHref="https://github.com/LielAmar/Party-Games" title="Party Games" titleHref="https://github.com/LielAmar/Party-Games" role="Developer">
            <p>
              <strong>Party Games</strong> is a Spigot plugin, a fork of <a href="https://hypixel.net/forums/arcade-games.80/">Hypixel's Party Games</a>.
              <br></br>
              It contains 26 different Minigames and tens of features, while being highly customizable.
            </p>
          </Work>

          <Work src="/images/lielsutils.webp" alt="Liel's Utils Lib" iconHref="https://github.com/LielAmar/LielsUtils" title="Liel's Utils" titleHref="https://github.com/LielAmar/LielsUtils" role="Developer">
            <p>
              <strong>Liel's Utils</strong> is a utility library for Java and Spigot development.
              <br></br>
              It includes utilities for Packets, Custom Entities, Scoreboards, Bossbars, Validation, Databases, Maps, GUIs and Commands.
            </p>
          </Work>

          <Work src="/images/armsrace.webp" alt="Arms Race Plugin" iconHref="https://bit.ly/3oPl9hB" title="Arms Race" titleHref="https://bit.ly/3oPl9hB" role="Developer">
            <p>
              <strong>ArmsRace</strong> is a one of its kind Minecraft Minigame. It features Combat and Shop Systems, Cosmetics, Skills, Perks, Pickups, Unlimited Maps, Unlimited Tiers and more.
            </p>
          </Work>



          <Work src="/images/lielscore.webp" alt="Liel's Core Lib" iconHref="https://github.com/LielAmar/LielsCore" title="Liel's Core" titleHref="https://github.com/LielAmar/LielsCore" role="Developer">
            <p>
              <strong>Liel's Core</strong> is a Minecraft plugin that was created to control, enable and disable certain aspects of the game.
              <br></br>
              It has more than 50 essential features that makes it possible to run events and tournaments through Minecraft.
            </p>
          </Work>

          <Work src="/images/play-il_network.webp" alt="Play-IL Network" iconHref="https://www.youtube.com/watch?v=upHr3M-UoPI" title="Play-IL Network" titleHref="https://www.youtube.com/watch?v=upHr3M-UoPI" role="Manager & Lead Developer">
            <p>
              <strong>Play-IL Network</strong> was a Minecraft server which offered over 10 different unique Minigames.
              <br></br>
              It attracted thousands of players, which made it one of the largest Israeli game servers at the time.
            </p>
          </Work>
        </div>
      </div>
    </section>
  );
}

export default Works
