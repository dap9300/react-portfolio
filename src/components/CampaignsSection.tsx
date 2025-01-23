import React from "react";
import { Layout } from "lucide-react";
import { Campaign, CampaignContent } from "../types";

interface CampaignsSectionProps {
  campaigns: Campaign[];
}

const CampaignsSection: React.FC<CampaignsSectionProps> = ({ campaigns }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center gap-2 mb-6">
        <Layout className="h-6 w-6" />
        <h2 className="text-2xl font-bold">Key Roles</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {campaigns.map((campaign: Campaign, i: number) => (
          <div key={i} className="space-y-4">
            <h3 className="text-xl font-bold">{campaign.title}</h3>
            <p className="text-gray-600">{campaign.description}</p>
            <div className="grid grid-cols-1 gap-4">
              {campaign.content.map((content: CampaignContent, j: number) => (
                <div key={j}>
                  <img
                    src={`/api/placeholder/${content.placeholder}`}
                    alt={content.type}
                    className="w-full rounded-lg mb-2"
                  />
                  <h4 className="text-2xl font-bold">{content.type}</h4>
                  <p className="text-sm text-gray-600">{content.description}</p>
                  {content.contentText && (
                    <div
                      className="text-gray-600"
                      dangerouslySetInnerHTML={{
                        __html: content.contentText,
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignsSection;
