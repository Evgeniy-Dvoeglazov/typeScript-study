enum Membership {
    Simple,
    Standart,
    Premium
}

const membership = Membership.Standart  // 1
const membershipReverse = Membership[2] // Premium

////////////

enum SocialMedia {
    VK = 'vk',
    FACEBOOK = 'facebook',
    INSTAGRAM = 'instagram'
}

const social = SocialMedia.VK
console.log(social);