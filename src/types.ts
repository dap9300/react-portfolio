export interface CampaignContent {
  type: string;
  description: string;
  placeholder: string;
  contentText?: string;
}

export interface Campaign {
  title: string;
  type: string;
  description: string;
  content: CampaignContent[];
}

export interface Project {
  id: string;
  title: string;
  period: string;
  companyName: string;
  collaborationPeriod: string;
  overview: {
    description: string;
    objectives: string[];
    channels: string[];
    ruoli: string[];
  };
  campaigns: Campaign[];
  metrics: {
    socialGrowth: {
      followers?: string;
      engagement?: string;
      reach?: string;
      connections?: string;
    };
    sales?: {
      revenue: string;
      conversion: string;
      ROAS: string;
    };
    business?: {
      bookings: string;
      revenue: string;
      customerRetention: string;
    };
    local?: {
      googleRating: string;
      localMentions: string;
    };
    leads?: {
      generated: string;
      conversion: string;
      CAC: string;
    };
    content?: {
      downloads: string;
      webinarAttendees: string;
    };
    brand?: {
      mentions: string;
      sentiment: string;
    };
  };
  skills: {
    tools: string[];
    expertise: string[];
  };
  modalImage: string;
  modalText?: string; // Rendiamo `modalText` opzionale
}
