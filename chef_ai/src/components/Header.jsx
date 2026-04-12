import chefClaudeIcon from '../assets/chef-claude-icon.png'

export default function Header () {
    return (
        <header>
            <img src={chefClaudeIcon} alt="chef AI icon" />
            <h1>Chef AI</h1>
        </header>
    )
}