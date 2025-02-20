import { SettingsApiKeysTable } from '@/settings/api-keys/components/SettingsApiKeysTable';
import { SettingsReadDocumentationButton } from '@/settings/api-keys/components/SettingsReadDocumentationButton';
import { SettingsPageContainer } from '@/settings/components/SettingsPageContainer';
import { SettingsPath } from '@/types/SettingsPath';
import { SubMenuTopBarContainer } from '@/ui/layout/page/components/SubMenuTopBarContainer';
import { useIsMobile } from '@/ui/utilities/responsive/hooks/useIsMobile';
import styled from '@emotion/styled';
import { Trans, useLingui } from '@lingui/react/macro';
import { Button, H2Title, IconPlus, MOBILE_VIEWPORT, Section } from 'twenty-ui';
import { getSettingsPath } from '~/utils/navigation/getSettingsPath';

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: ${({ theme }) => theme.spacing(2)};
  @media (max-width: ${MOBILE_VIEWPORT}px) {
    padding-top: ${({ theme }) => theme.spacing(5)};
  }
`;

const StyledContainer = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const SettingsApiKeys = () => {
  const isMobile = useIsMobile();
  const { t } = useLingui();

  return (
    <SubMenuTopBarContainer
      title={t`Developers`}
      actionButton={<SettingsReadDocumentationButton />}
      links={[
        {
          children: <Trans>Workspace</Trans>,
          href: getSettingsPath(SettingsPath.Workspace),
        },
        { children: <Trans>API Keys</Trans> },
      ]}
    >
      <SettingsPageContainer>
        <StyledContainer isMobile={isMobile}>
          <Section>
            <H2Title
              title={t`Playground`}
              description={t`Try our REST or GraphQL API playgrounds.`}
            />
          </Section>
          <Section>
            <H2Title
              title={t`API keys`}
              description={t`Active API keys created by you or your team.`}
            />
            <SettingsApiKeysTable />
            <StyledButtonContainer>
              <Button
                Icon={IconPlus}
                title={t`Create API key`}
                size="small"
                variant="secondary"
                to={getSettingsPath(SettingsPath.DevelopersNewApiKey)}
              />
            </StyledButtonContainer>
          </Section>
        </StyledContainer>
      </SettingsPageContainer>
    </SubMenuTopBarContainer>
  );
};
