import { SettingsTabs } from '@/components/settingsTabs'
import * as Input from '@/components/input'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import * as FileInput from '@/components/form/fileInput'
import { Select } from '@/components/form/select'
import { SelectItem } from '@/components/form/select/item'
import { TextArea } from '@/components/form/textArea'
import { Button } from '@/components/Button'
export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex flex-col  justify-between gap-4 border-b border-zinc-200  pb-5 lg:flex-row lg:items-center">
          <div className="space-y-1">
            <h1 className="text-lg font-medium text-zinc-900">Personal info</h1>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button type="submit" form="settings" variant="primary">
              Save
            </Button>
          </div>
        </div>
        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
              <Input.InputRoot>
                <Input.InputControl id="fristName" defaultValue={'Rodolfo'} />
              </Input.InputRoot>

              <div className="flex flex-col gap-3 lg:block">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-zinc-700 lg:sr-only"
                >
                  Last name
                </label>
                <Input.InputRoot>
                  <Input.InputControl id="lastName" defaultValue={'Carvalho'} />
                </Input.InputRoot>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email address
            </label>
            <Input.InputRoot>
              <Input.InputPrefix>
                <Mail />
              </Input.InputPrefix>
              <Input.InputControl
                id="email"
                type="email"
                defaultValue={'rodolfo@email.com'}
              />
            </Input.InputRoot>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>
            <div>
              <FileInput.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
                <FileInput.ImagePreview />
                <FileInput.Trigger />
                <FileInput.Control />
              </FileInput.Root>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>
            <Input.InputRoot>
              <Input.InputControl id="role" defaultValue={'CTO'} />
            </Input.InputRoot>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>
            <Select placeholder="Select a country...">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="United state" />
            </Select>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              TimeZone
            </label>
            <Select placeholder="Select a timezone...">
              <SelectItem
                value="utc8"
                text="Pacific Standard Time (UTC−08:00)"
              />
              <SelectItem value="utc3" text="America São Paulo (UTC-3:00)" />
            </Select>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span>Write a short introduction.</span>
            </label>
            <div className="space-y-3">
              <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem
                    value="normal"
                    defaultChecked
                    text="Normal Text"
                  />
                  <SelectItem value="md" text="Markdown" />
                </Select>
                <div className="flex items-center gap-1">
                  <Button type="button" variant="ghost">
                    <Bold className="size-4 text-zinc-500 " strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Italic className="size-4 text-zinc-500 " strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Link className="size-4 text-zinc-500 " strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <List className="size-4 text-zinc-500 " strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <ListOrdered
                      className="size-4 text-zinc-500 "
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>

              <TextArea
                id="bio"
                defaultValue={`I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development.`}
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="projects"
              className="text-sm font-medium text-zinc-700"
            >
              Portfolio projects
              <span>Share a few snippets of your work.</span>
            </label>
            <FileInput.Root className="">
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button type="submit" form="settings" variant="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
