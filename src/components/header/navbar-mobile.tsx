import * as Dialog from '@radix-ui/react-dialog'
import Link from 'next/link'
import Footer from '../footer'
export default function NavbarMobile() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="border-b border-lines px-6 py-4" title="Abrir Menu">
          <i className="ri-menu-line ri-xl" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-primary-black" />
        <Dialog.Content className="fixed inset-5 flex flex-col rounded-lg border border-lines bg-primary-blue">
          <Dialog.Title className="w-full border-b border-lines p-4">
            <p>felipe-soares</p>
          </Dialog.Title>
          <Dialog.Description className="flex h-full flex-col justify-between">
            <nav className="flex flex-col text-white">
              <Dialog.Close asChild>
                <Link href="/" className={'border-b border-lines p-4'}>
                  _hello
                </Link>
              </Dialog.Close>
              <Dialog.Close asChild>
                <Link href="/about/me" className={'border-b border-lines p-4'}>
                  _about-me
                </Link>
              </Dialog.Close>
              <Dialog.Close asChild>
                <Link href="/projects" className={'border-b border-lines p-4'}>
                  _projects
                </Link>
              </Dialog.Close>

              <Dialog.Close asChild>
                <Link href="/contact" className={'border-b border-lines p-4'}>
                  _contact-me
                </Link>
              </Dialog.Close>
            </nav>
            <Dialog.Close asChild>
              <Footer />
            </Dialog.Close>
          </Dialog.Description>
          <Dialog.Close asChild>
            <button className="absolute right-4 top-4" title="Fechar Menu">
              <i className="ri-close-line ri-xl" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
