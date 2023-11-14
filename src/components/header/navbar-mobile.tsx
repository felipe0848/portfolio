import * as Dialog from '@radix-ui/react-dialog'
import Link from 'next/link'
import Footer from '../footer'
export default function NavbarMobile() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="px-6 py-4 border-b border-lines" title="Abrir Menu">
          <i className="ri-menu-line ri-xl" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-primary-black fixed inset-0" />
        <Dialog.Content className="fixed inset-5 bg-primary-blue rounded-lg flex flex-col border border-lines">
          <Dialog.Title className="p-4 border-b w-full border-lines">
            <p>felipe-soares</p>
          </Dialog.Title>
          <Dialog.Description className="h-full flex flex-col justify-between">
            <nav className="flex flex-col text-white">
              <Dialog.Close asChild>
                <Link href="/" className={'border-b p-4 border-lines'}>
                  _hello
                </Link>
              </Dialog.Close>
              <Dialog.Close asChild>
                <Link href="/about_me" className={'border-b p-4 border-lines'}>
                  _about-me
                </Link>
              </Dialog.Close>
              <Dialog.Close asChild>
                <Link href="/projects" className={'border-b p-4 border-lines'}>
                  _projects
                </Link>
              </Dialog.Close>

              <Dialog.Close asChild>
                <Link href="/contact" className={'border-b p-4 border-lines'}>
                  _contact-me
                </Link>
              </Dialog.Close>
            </nav>
            <Dialog.Close asChild>
              <Footer />
            </Dialog.Close>
          </Dialog.Description>
          <Dialog.Close asChild>
            <button className="absolute top-4 right-4" title="Fechar Menu">
              <i className="ri-close-line ri-xl" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
